import React from 'react';
import { storiesOf, addDecorator  } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';


storiesOf( 'NOtes', module )
	.add( 'with some stuff', () => <Button>Hi</Button>, { notes: 'A note' } )
