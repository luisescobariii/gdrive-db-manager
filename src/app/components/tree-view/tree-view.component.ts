import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  nodes: any[];
  activeNode = -1;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.nodes = this.api.server.get();
  }

  handdleSelection({node}) {
    if (node.type === 'leaf') {
      this.activeNode = node.key;
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

}
