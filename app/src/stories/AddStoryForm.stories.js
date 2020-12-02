import React from 'react';

import AddStoryForm from "./AddStoryForm";

export default {
    title: 'App/AddStoryForm',
    component: AddStoryForm,
};

const Template = (args) => <AddStoryForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSubmit: (e, title, body) => {
        e.preventDefault()
        console.log('title', title, 'body', body)
    }
};
