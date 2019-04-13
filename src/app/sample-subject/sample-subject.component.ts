import { Component, OnInit } from '@angular/core';
import { AsyncSubject , BehaviorSubject, ReplaySubject  } from 'rxjs';


@Component({
  selector: 'app-sample-subject',
  templateUrl: './sample-subject.component.html',
  styleUrls: ['./sample-subject.component.scss']
})
export class SampleSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public TestAsyncSubject() {
    // RxJS v6+

const sub = new AsyncSubject();

sub.subscribe(console.log);

sub.next(123); //nothing logged

sub.subscribe(console.log);

sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers
  }


  public TestBehaviorSubject() {
    const subject = new BehaviorSubject(123);

//two new subscribers will get initial value => output: 123, 123
subject.subscribe(console.log);
subject.subscribe(console.log);

//two subscribers will get new value => output: 456, 456
subject.next(456);

//new subscriber will get latest value (456) => output: 456
subject.subscribe(console.log);

//all three subscribers will get new value => output: 789, 789, 789
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789

  }


  public TestRelaySubject() {
    const sub = new ReplaySubject(3);

sub.next(1);
sub.next(2);
sub.subscribe(console.log); // OUTPUT => 1,2
sub.next(3); // OUTPUT => 3
sub.next(4); // OUTPUT => 4
sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
  }


}
