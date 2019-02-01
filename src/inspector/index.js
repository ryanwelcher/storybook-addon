import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

export const blockInspector = makeDecorator({
	name: 'blockInspector',
	wrapper: (getStory, context ,{ options, parameters } ) => {
		const channel = addons.getChannel();
		const storyOptions = parameters || options;
		const text = 'test';
		channel.emit( 'ryanwelcher/bi/show', text );
		return getStory( context );
	}
});
