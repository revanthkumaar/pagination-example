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
  page = 0;
  size = 10;
  title = '';

  ngOnInit(): void {
    this.retrievePaginatedInfo();
  }

  getRequestParams(searchTitle: string,page: number, size: number) {
    let params: any = {};

    if(searchTitle) {
      params['title'] = searchTitle;
    }

    if (page) {
      params[`pageNum`] = page;
    }

    if (size) {
      params['sizePage'] = size;
    }

    return params;
  }

  retrievePaginatedInfo(): void {
    const params = this.getRequestParams(this.title,this.page, this.size);

    this.topicsService.getPaginatedInfo(params).subscribe(
      (response) => {
        const { topics, totalItems, ...otherProps } = response; //object destructure
        console.log(topics);
        console.log(totalItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePaginatedInfo();
  }

  searchTitle(): void {
    this.retrievePaginatedInfo();
  }

  removeAllPassengers(){
    console.log('delete clicked')
  }
}
