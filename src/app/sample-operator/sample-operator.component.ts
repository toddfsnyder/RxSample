import { Component, OnInit } from '@angular/core';
import { take, map, mapTo, combineAll, concat, filter } from 'rxjs/operators';
import { Observable, interval, of, merge, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-sample-operator',
  templateUrl: './sample-operator.component.html',
  styleUrls: ['./sample-operator.component.scss']
})
export class SampleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public TestInterval() {
    //emit every 1s, take 2
    const source = interval(1000).pipe(take(2));
    //map each emitted value from source to interval observable that takes 5 values
    const example = source.pipe(
      map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
    );
    /*
      2 values from source will map to 2 (inner) interval observables that emit every 1s
      combineAll uses combineLatest strategy, emitting the last value from each
      whenever either observable emits a value
    */
    const combined = example.pipe(combineAll());
    /*
      output:
      ["Result (0): 0", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 4"]
    */
    const subscribe = combined.subscribe(val => console.log(val))
  }

  public TestAjax() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax(githubUsers)

    const subscribe = users.subscribe(
        res => console.log(res),
        err => console.error(err)
      );
  }

  public TestConcat() {
    //emits 1,2,3
const sourceOne = of(1, 2, 3);
//emits 4,5,6
const sourceTwo = of(4, 5, 6);
//emit values from sourceOne, when complete, subscribe to sourceTwo
const example = sourceOne.pipe(concat(sourceTwo));
//output: 1,2,3,4,5,6
const subscribe = example.subscribe(val =>
  console.log('Example: Basic concat:', val)
);
  }

  public TestMerge() {

    //emit every 2.5 seconds
const first = interval(2500);
//emit every 2 seconds
const second = interval(2000);
//emit every 1.5 seconds
const third = interval(1500);
//emit every 1 second
const fourth = interval(1000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND!')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => console.log(val));
  }

  public TestFilterNumber() {
    //emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//filter out non-even numbers
const example = source.pipe(filter(num => num % 2 === 0));
//output: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));
  }

  public TestFilterObject() {

    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));

  }

  public TestMap() 
  {
    //emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//add 10 to each value
const example = source.pipe(map(val => val + 10));
//output: 11,12,13,14,15
const subscribe = example.subscribe(val => console.log(val));
  }

  public TestMapProperty() 
  {
    //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 }
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(map(({ name }) => name));
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe(val => console.log(val))
  }

}
