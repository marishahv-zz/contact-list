import React from 'react';
import { ToolBar } from './toolBar/toolBar';

export class Header extends React.PureComponent {
  render() {
    return (
  		<header className="jumbotron h-50">
				<h1 className="display-4">Contact List</h1>
				<hr className="my-4"></hr>
				<ToolBar />
			</header>
    );
  }
}
