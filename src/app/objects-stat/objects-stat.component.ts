import {Component, OnInit} from '@angular/core';
import {DgraphService, FieldType, FormField} from "@solenopsys/lib-dgraph";
import {DgraphDataBuffered} from "@solenopsys/lib-dgraph";
import {IdService} from "@solenopsys/lib-globals";


@Component({
  selector: 'app-objects-stat',
  templateUrl: './objects-stat.component.html',
  styleUrls: ['./objects-stat.component.css']
})
export class ObjectsStatComponent implements OnInit { //todo воостановить

  tableKey

  dataInterface!: DgraphDataBuffered;

  fields: FormField[] = [
    {key: 'uid', title: 'UID', type: FieldType.UID},
    {key: 'rom.resource', title: 'Object', type: FieldType.STRING},
    {key: 'count', title: 'Count', type: FieldType.NUMBER},
  ];

  constructor(private dg: DgraphService, private idService: IdService) {
    this.tableKey = idService.getNextId();
  }

  ngOnInit(): void {
    this.dataInterface = new DgraphDataBuffered(this.dg);
  }

}
