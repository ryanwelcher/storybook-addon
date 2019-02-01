import React from 'react';
import addons from '@storybook/addons';

class BlockInspector extends React.Component {

	render() {

		const text = 'This is the text';
		return (
			<Panel
				className="addon-notes-container"
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		)
	}
}

addons.register( 'ryanwelcher/bi', api => {
	const channel = addons.getChannel();
	addons.addPanel('ryanwelcher/bi/panel', {
		title: 'Block Inspector',
		render: ({ active }) => <BlockInspector channel={channel} api={api} active={active} />,
	});
});
