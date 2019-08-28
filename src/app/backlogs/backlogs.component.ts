import {Component, OnInit} from '@angular/core';
import {BacklogsService} from '../backlogs.service';
import {Backlog} from '../Backlog';

@Component({
  selector: 'app-backlogs',
  templateUrl: './backlogs.component.html',
  styleUrls: ['./backlogs.component.scss']
})
export class BacklogsComponent implements OnInit {

  backlogs: Backlog[];
  backlog: Partial<Backlog>;
  titleToDo = '';
  titleDoing = '';
  titleDone = '';
  i = 5;

  index: number;

  constructor(private service: BacklogsService) {
  }

  ngOnInit() {
    this.service.getBacklogs().subscribe(next => {
      this.backlogs = next;
    }, error => console.log(error));

    this.backlog = {
      title: '',
      status: ''
    };
  }

  onDragstart(i) {
    this.index = i;
  }

  onDropTodo($event: DragEvent) {
    $event.preventDefault();
    this.backlogs[this.index].status = 'to do';
    this.service.updateBacklog(this.backlogs[this.index]).subscribe();
  }

  onDropDoing($event: DragEvent) {
    $event.preventDefault();
    this.backlogs[this.index].status = 'doing';
    this.service.updateBacklog(this.backlogs[this.index]).subscribe();
  }

  onDropDone($event: DragEvent) {
    $event.preventDefault();
    this.backlogs[this.index].status = 'done';
    this.service.updateBacklog(this.backlogs[this.index]).subscribe();
  }

  allowDrop($event: DragEvent) {
    $event.preventDefault();
  }

  addTodo() {
    this.backlog.title = this.titleToDo;
    this.backlog.status = 'to do';

    this.service.insertBacklog(this.backlog).subscribe(() => {
      this.titleToDo = '';
      this.backlog = {
        title: '',
        status: ''
      };
    });
  }

  addDoing() {
    this.backlog.title = this.titleDoing;
    this.backlog.status = 'doing';
    this.service.insertBacklog(this.backlog).subscribe(() => {
      this.titleToDo = '';
      this.backlog = {
        title: '',
        status: ''
      };
    });
  }

  addDone() {
    this.backlog.title = this.titleDone;
    this.backlog.status = 'done';
    this.service.insertBacklog(this.backlog).subscribe(() => {
      this.titleToDo = '';
      this.backlog = {
        title: '',
        status: ''
      };
    });
  }
}
