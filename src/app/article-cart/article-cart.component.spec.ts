import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCartComponent } from './article-cart.component';

describe('ArticleCartComponent', () => {
  let component: ArticleCartComponent;
  let fixture: ComponentFixture<ArticleCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
