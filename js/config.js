"use strict";

define({
    logLvl: 1 // 0=off, 1=debug,3=error
    , imagePath: "js/lib/dhtmlx/3.6/imgs/", iconPath: "js/lib/dhtmlx/3.6/imgs/", treeMenus: {id: 0,
        item: [
            {id: "customer^C^1", text: "Customer",
                item: [
                    {id: "customer^CL^11", text: "List", tag: 'CL'},
                    {id: "customer^CN^12", text: "Create", tag: 'CN'}
                ]
            } /*,
             {id:3,text:"close"}*/
            /*{id:1,text:"Menu"},
             {id:2, text:"middle",child:"1",im0:"book.gif",
             item:[
             {id:"21", text:"child"}
             ]},
             {id:3,text:"last"}*/
        ]
    }, welcomePage: "./statics/welcome.html", toolBarIconPath: "js/lib/dhtmlx/3.6/imgs/toolbar/", gridIconPath: "js/lib/dhtmlx/3.6/imgs/grid/", listCustomerToolbarXML: '<toolbar> ' +
        '<item type="button" id="edit_row" text="Edit" img="table_edit.png" />' +
        '<item type="button" id="delete_row" text="Delete" img="cancel.png" />' +
        '<item id="print" type="button" img="print.gif" imgdis="print_dis.gif" text="Print"> ' +
//            '<item type="button" id="print_page" text="Page" img="page.gif"/> ' +
//            '<item type="button" id="print_range" text="Page Range" img="page_range.gif"/> ' +
//            '<item type="button" id="print_sel" text="Selection" img="selection.gif"/> ' +
//            '<item type="separator" id="print_s1"/> <item type="button" id="print_cfg" text="Settings" img="settings.gif"/> ' +
        '</item> ' +
        '</toolbar>', createCustomerToolbarXML: '<toolbar> ' +
        '<item id="new" type="button" img="new.gif" imgdis="new_dis.gif" text="New" action="showNewDocumentSelect"/> ' +
//                '<item type="button" id="new_text" text="Text Document" img="text_document.gif" action="doOnNewDocument"/> ' +
//                '<item type="button" id="new_excel" text="Stylesheet" img="stylesheet.gif" action="doOnNewDocument"/> ' +
//                '<item type="button" id="new_db" text="Database" img="database.gif" action="doOnNewDocument"/> ' +
//                '<item type="button" id="new_pp" text="Presentation" img="presentation.gif" action="doOnNewDocument"/> ' +
//                '<item type="separator" id="new_s1"/> ' +
//                '<item type="button" id="new_other" text="Other" img="other.gif" action="doOnNewDocument"/> ' +
//                '</item> ' +
        '<item id="sep1" type="separator"/> ' +
        //'<item id="open" type="button" img="open.gif" imgdis="open_dis.gif"/> ' +
        '<item id="save" type="button" img="save.gif" imgdis="save_dis.gif"/> ' +
//                '<item id="save_as" type="button" img="save_as.gif" text="Save As..." imgdis="save_as_dis.gif" enabled="false"/> ' +
//                '<item id="sep2" type="separator"/> <item id="undo" type="button" img="undo.gif" imgdis="undo_dis.gif"/> ' +
//                '<item id="redo" type="button" img="redo.gif" imgdis="redo_dis.gif"/> <item id="sep3" type="separator"/> ' +
//                '<item id="cut" type="button" img="cut.gif" text="Cut" imgdis="cut_dis.gif" action="doEdit"> ' +
//                    '<userdata name="linka"><![CDATA[http://linkA]]></userdata> ' +
//                    '<userdata name="linkb"><![CDATA[http://linkB]]></userdata> </item> ' +
//                '<item id="copy" type="button" img="copy.gif" text="Copy" imgdis="copy_dis.gif" action="doEdit"> ' +
//                        '<userdata name="linkc"><![CDATA[http://linkC]]></userdata> </item> ' +
//                '<item id="paste" type="button" img="paste.gif" text="Paste" imgdis="paste_dis.gif" action="doEdit"/> ' +
//                '<item id="sep4" type="separator"/> ' +
//                '<item id="print" type="buttonSelect" img="print.gif" imgdis="print_dis.gif" text="Print"> ' +
//                    '<item type="button" id="print_page" text="Page" img="page.gif"/> ' +
//                    '<item type="button" id="print_range" text="Page Range" img="page_range.gif"/> ' +
//                    '<item type="button" id="print_sel" text="Selection" img="selection.gif"/> ' +
//                    '<item type="separator" id="print_s1"/> <item type="button" id="print_cfg" text="Settings" img="settings.gif"/> ' +
//                '</item> ' +
//                '<item id="sep5" type="separator"/> ' +
//                '<item id="info" type="text" text="dhtmlxToolbar Demo"/> ' +
        '</toolbar>', customerFormXML: '<items>' +
        '<item type="radio" name="select" value="online" label="Will enjoy the online demo"/>' +
        '<item type="radio" name="select" value="disk" label="Please send me disk" checked="true">' +
        '<item type="checkbox" name="bootleg" label="Insert bootleg" checked="true"/>' +
        '<item type="checkbox" name="lyrics" label="Lyrics if possible" checked="true"/>' +
        '<item type="label" label="Payment"/>' +
        '<item type="radio" name="paymenttype" value="creditcard" label="Credit Card">' +
        '<item type="input" name="cardnumber" value="XXXX-XXXX-XXXX-XXXX" label="Card Number"/>' +
        '<item type="input" name="cardkey" value="XXXX" label="Key"/>' +
        '</item>' +
        '<item type="radio" name="paymenttype" value="cash" label="Cash" checked="1"/>' +
        '<item type="label" label="Currency"/>' +
        '<item type="radio" name="currencytype" value="dollar" label="U. S. Dollars" checked="1"/>' +
        '<item type="radio" name="currencytype" value="euro" label="Euro"/>' +
        '<item type="radio" name="currencytype" value="rub" label="Russian Rubel"/>' +
        '<item type="select" name="mediatype" label="Select Media Type">' +
        '<option value="1" text="CD 700Mb">' +
        '<item type="checkbox" name="overburn" value="yes_1" checked="true" label="Overburn"/>' +
        '</option>' +
        '<option value="2" text="DVD5 4.4Gb">' +
        '<item type="checkbox" name="lightscribe" value="yes" checked="true" label="Light Scribe"/>' +
        '<item type="checkbox" name="labelflash" value="yes" label="Label Flash">' +
        '<item type="radio" name="labelflash_radio" value="required" checked="true" label="Required"/>' +
        '<item type="radio" name="labelflash_radio" value="not_mandatory" label="Not bad option"/>' +
        '</item>' +
        '</option>' +
        '<option value="3" text="DVD9 8.6Gb" selected="1"/>' +
        '<option value="4" text="Blue-Ray 24Gb"/>' +
        '</item>' +
        '<item type="select" name="audioquality" label="Select Audio Quality">' +
        '<option value="1">2.0 16bit/128kbps</option>' +
        '<option value="2">2.1 16bit/334kbps</option>' +
        '<option value="3" selected="1">5.1 32bit/448kbps</option>' +
        '</item>' +
        '<item type="select" name="videoquality" label="Select Video Quality">' +
        '<option value="1" text="DVD MPEG-2" selected="1"/>' +
        '<option value="2" text="DivX"/>' +
        '<option value="3" text="XviD"/>' +
        '</item>' +
        '<item type="input" label="Comments" value="Some Comments" rows="3"/>' +
        '</item>' +
        '<item type="hidden" name="hiden_data" value="some_value"/>' +
        '<item type="file" name="my_file" label="Schoose file"/>' +
        '<item type="button" value="Submit"/>' +
        '</items>'
});
