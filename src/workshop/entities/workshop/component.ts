import {
  ChangeDetectionStrategy,
  Component, Input,
} from '@angular/core';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { WorkshopOutAttrs } from 'cy-domain/src/workshop/domain-data/workshop/params';

@Component({
  selector: 'workshop-entity',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent {
  @Input() workshopData!: WorkshopOutAttrs;

  @Input() users!:UserAttrs[];
}
