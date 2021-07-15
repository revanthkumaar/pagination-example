import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../services/topics.service';
import { Topic } from '../models/topics.model';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  constructor(private topicsService: TopicsService) {}
  topics: Topic[] = [];
  page = 1;
  size = 2;

  ngOnInit(): void {
    //this.retrievePaginatedInfo();
  }
  /*
  getRequestParams(page: number, size: number) {
    let params: any = {};
    if (page) {
      params[`page`] = 10;
    }

    if (size) {
      params['size'] = 2;
    }

    return params;
  }

  retrievePaginatedInfo(): void {
    const params = this.getRequestParams(this.page, this.size);

    this.topicsService.getPaginatedInfo(params).subscribe(
      (response) => {
        const { topics, totalItems, ...otherProps } = response; //object destructure
        console.log(topics)
        console.log(totalItems)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  */
}
