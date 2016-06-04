
// ReactDOM.render(
// 	<h1>Hello, world!</h1>,
// 	document.getElementById('example')
// );

var navigationConfig = [
	{
		href: 'http\://ryanclark.me',
		text: 'My Website',
		children: [
			{
				href:  'http\://ryanclark.me/how-angularjs-implements-dirty-checking/',
				text: 'Angular Dirty Checking'
			},
			{
				href: 'http\://ryanclark.me/getting-started-with-react/',
				text: 'React'
			},
		]
	}
];

var Navigation = React.createClass({
	getInitialState: function () {
		return {
			openDropdown: -1
		};
	},

	getDefaultProps: function () {
		return {
			config: []
		}
	},

	openDropdown: function (id) {
		this.setState({
			openDropdown: id
		});
	},

	closeDropdown: function () {
		this.setState({
			openDropdown: -1
		});
	},

	propTypes: {
		config: React.PropTypes.array
	},

	render: function () {
		var config = this.props.config;

		var items = config.map(function (item, index) {
			var children, dropdown;
			if (item.children) {
				children = item.children.map(function (child) {
					return (
						<li className="navigation__dropdown__item">
							<a className="navigation__dropdown__link" href={ child.href }>
								{ child.text }
							</a>
						</li>
					);
				});

				var dropdownClass = 'navigation__dropdown';
				if (this.state.openDropdown === index) {
					dropdownClass += 'navigation__dropdown__open';
				}
				console.log(this.state.openDropdown, index);

				dropdown = (
					<ul className={ dropdownClass }>
						{ children }
					</ul>
				);
			}
			return (
				<li className="navigation__item" onMouseOut={ this.closeDropdown } onMouseOver={ this.openDropdown.bind(this, index) }>
					<a className="navigation__link" href={ item.href }>
						{item.text}
					</a>
					{ dropdown }
				</li>
				);
		}, this);

		return (
			<div className="navigation">
				{ items }
			</div>
			);
	}
});

React.render(<Navigation config={ navigationConfig } />, document.body);
