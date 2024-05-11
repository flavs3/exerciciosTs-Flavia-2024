import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BotaoExpandir';
  showMore = false;
  showTopicForm = false;
  submitted = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  toggleTopicForm() {
    this.showTopicForm = !this.showTopicForm;
  }

  onSubmit() {
    console.log('Formulário Enviado!');
    this.submitted = true;
  }

  expandComment(event: MouseEvent) {
    const clickedElement = event.currentTarget as HTMLElement;
    const expandedComment = clickedElement.nextElementSibling as HTMLElement;
    expandedComment.classList.toggle("show");
  }
}
