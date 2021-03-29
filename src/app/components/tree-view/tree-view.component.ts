import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ServerInfo } from 'src/app/models/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit, OnDestroy {

  config: ServerInfo = null;
  nodes: any[] = [];
  activeNode = -1;
  translations: { [index: string]: string } = null;
  loading = true;

  subscriptions: Subscription[] = [];

  constructor(
    private data: DataService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.data.config.subscribe(res => {
      if (res) { this.config = res; this.createNodes(); }
    }, console.error));
    this.subscriptions.push(this.translate.get(['tree.tables', 'tree.queries']).subscribe(res => {
      if (res) { this.translations = res; this.createNodes(); }
    }, console.error));
  }

  createNodes() {
    if (!this.config || !this.translations) { return; }

    const keys = Object.keys(this.config.databases).sort((a, b) => a < b ? -1 : 1);
    for (const key of keys) {
      const db = this.config.databases[key];
      console.log(key, db);
      const dbNode = {
        id: db.id,
        label: db.name,
        icon: 'fas fa-database',
        children: [
          {
            id: `tables-${db.id}`,
            label: this.translations['tree.tables'],
            icon: 'fas fa-folder',
            children: [],
          }, {
            id: `queries-${db.id}`,
            label: this.translations['tree.queries'],
            icon: 'fas fa-folder',
            children: [],
          },
        ]
      };

      for (const tableName of db.tables) {
        dbNode.children[0].children.push({
          id: `table-${tableName}-${db.id}`,
          label: tableName,
          icon: 'fas fa-table',
          type: 'leaf'
        });
      }

      for (const queryName of db.queries) {
        dbNode.children[1].children.push({
          id: `query-${queryName}-${db.id}`,
          label: queryName,
          icon: 'fas fa-paper-plane',
          type: 'leaf'
        });
      }

      this.nodes.push(dbNode);
      this.loading = false;
    }
  }

  handdleSelection({node}) {
    if (node.type === 'leaf') {
      this.activeNode = node.id;
      this.openActiveNode();
      return;
    }
    node.expanded = !node.expanded;
  }

  openActiveNode() {
    console.log(this.activeNode);
  }

  addDb() {
    this.nodes.push({
      label: 'New DB',
      children: [
        { id: 9, label: 'Tables', icon: 'fas fa-folder', children: [] },
        { id: 12, label: 'Queries', icon: 'fas fa-folder', children: [] }
      ]
    });
    this.nodes.sort((a, b) => a.label > b.label ? 1 : -1);
  }

  addElement(e: Event, id: number) {
    e.preventDefault();
    e.stopPropagation();

    for (const db of this.nodes) {
      const node = db.children.find(folder => folder.id === id);
      if (node) {
        node.children.push({ label: 'New Table', icon: 'fas fa-table', type: 'leaf' });
        node.children.sort((a, b) => a.label > b.label ? 1 : -1);
        return;
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub?.unsubscribe());
  }

}
