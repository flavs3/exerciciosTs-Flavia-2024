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
  

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  toggleTopicForm() {
    this.showTopicForm = !this.showTopicForm;
  }

  onSubmit() {
    console.log('Formulário Enviado!');
  }

  expandComment(event: MouseEvent) {
    const clickedElement = event.currentTarget as HTMLElement;
    const expandedComment = clickedElement.nextElementSibling as HTMLElement;
    expandedComment.classList.toggle("show");
  }
  
}
