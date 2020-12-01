import React from 'react';

import NewsTile from "./NewsTile";

export default {
    title: 'App/NewsTile',
    component: NewsTile,
};

const Template = (args) => <NewsTile {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "My Default Title",
    author: "anonymous",
    expired: false,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus vestibulum imperdiet. Nam vel nisl eleifend, facilisis arcu ut, ornare felis. In vehicula sapien id felis semper, nec tempor dui tempus. Nulla eget ante et neque ornare mollis. Nullam ut magna pharetra, tempor ligula quis, vestibulum sapien. Nullam dictum ut magna at condimentum. Aliquam sit amet dolor leo.\n" +
        "Aliquam feugiat sit amet turpis quis viverra. Integer tempor blandit nunc, vitae sollicitudin sapien. Pellentesque elementum non sem a dapibus. Vestibulum aliquet turpis lectus, a fringilla urna posuere interdum. Vestibulum sit amet vulputate velit. Duis tristique velit vestibulum, semper mi quis, vestibulum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis at sapien vel purus commodo semper vel id tortor. Proin eu neque dolor.\n" +
        "Proin elit quam, porta rhoncus tempor in, consectetur in sem. Nam sit amet tortor ipsum. Sed viverra imperdiet lectus, in euismod velit commodo sit amet. Morbi nisi lectus, ultricies id justo et, commodo scelerisque ante. Donec et metus ac ante hendrerit semper. Nulla cursus risus id dolor elementum mollis. Integer molestie sodales ornare. In erat nisi, consequat ac lectus eu, finibus facilisis nunc. Donec urna turpis, interdum eget aliquet nec, faucibus ac elit.\n" +
        "Nam lectus lacus, posuere et blandit et, ullamcorper et arcu. Sed dictum ante sed neque sollicitudin, ultrices egestas diam auctor. Donec rhoncus, sapien rhoncus rutrum pretium, ex elit hendrerit est, a bibendum diam nisl et magna. Sed sagittis vehicula est. Vestibulum lacus mi, varius dictum lacinia eget, rutrum ac magna. Sed sapien massa, luctus scelerisque malesuada quis, tincidunt vel justo. Fusce velit leo, vehicula at justo in, aliquet convallis nisl. Morbi pellentesque tellus vitae placerat mollis. In id gravida nulla, vitae volutpat elit. Pellentesque tempor dolor bibendum quam commodo, et sagittis dolor imperdiet. Duis vel viverra massa. Duis vitae ante sit amet diam tincidunt sagittis. Pellentesque et pulvinar elit, lobortis congue justo. Fusce id lacus vel ex porta placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "Fusce vitae enim ut libero auctor aliquet sit amet ut enim. Nullam placerat, tellus sit amet dignissim ornare, magna nisl dictum felis, et rutrum odio mi sed sem. Praesent egestas arcu ac ipsum gravida facilisis. Donec dictum rhoncus dolor in volutpat. Nulla malesuada nec ipsum in condimentum. Nunc lobortis dui ut magna molestie ultrices. In hac habitasse platea dictumst. Maecenas semper, massa ac dignissim suscipit, libero nunc pharetra sapien, nec semper lorem est vel turpis. Ut laoreet nunc nulla, efficitur mattis tellus mattis eu. Etiam condimentum congue pretium. "
};

export const Expired = Template.bind({});
Expired.args = {
    title: "A Very Exciting Title",
    author: "anonymous",
    expired: true
};
