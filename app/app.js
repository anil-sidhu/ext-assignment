Ext.onReady(function () {

    var logo = Ext.create('Ext.Img', {
        src: 'https://docs.sencha.com/assets/images/sencha_logo_thumb.png',
        height: 64,
        width: 64
    });

    var customToolBar = Ext.create('Ext.toolbar.Toolbar', {
        cls: "top-tool-bar",
        items: [{
            text: 'Home',
            itemId: 'home-toolbar-btn',
            handler: function () {
                alert("here")
                Ext.History.add('#customers')
            }
        }, {
            text: 'Login',
            itemId: 'login-toolbar-btn'
        },
        {
            text: 'Register',
            itemId: 'register-toolbar-btn',
            handler: function () {
                alert("persomn")
                Ext.History.add('#person')
            }
        }],
        layout: {
            type: "hbox",
            pack: "end",
            // align: "right"
        },
        flex: 1

    });

    nav = Ext.create('Ext.container.Container', {
        style: { borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#3487c3' },
        layout: {
            type: "hbox",
            // pack: "center",
            // align: "center"
        },
        items: [
            logo,
            customToolBar,
        ],
        flex: 2
    });

    var component2 = Ext.create('Ext.Component', {
        html: 'Body Part',
        flex: 1
    });

    var component3 = Ext.create('Ext.Component', {
        html: 'Footer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        style: {
            backgroundColor: '#e8e2e2'
        },
        flex: 1


    });

    var view = Ext.create('Ext.navigation.Bar', {
        // fullscreen: true,
    
        // items: [{
        //     title: 'First',
        //     items: [{
        //         xtype: 'button',
        //         text: 'Push a new view!',
        //         handler: function() {
        //             // use the push() method to push another view. It works much like
        //             // add() or setActiveItem(). it accepts a view instance, or you can give it
        //             // a view config.
        //             view.push({
        //                 title: 'Second',
        //                 html: 'Second view!'
        //             });
        //         }
        //     }]
        // }]
    });



});