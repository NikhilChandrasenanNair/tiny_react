import React, { Component } from "react";
import "./App.css";

import TinyEditorComponent from "./components/TinyEditorComponent";
import config from "./config/config";

class App extends Component {
  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    const initConfig = {
      branding: false,
      width: "99%",
      height: 800,
      resize: false,
      plugins: [
        "advlist autolink lists link image charmap print preview anchor textcolor colorpicker",
        "searchreplace visualblocks advcode fullscreen",
        "insertdatetime media table contextmenu paste code wordcount",
        "noneditable save a11ychecker"
      ],
      toolbar:
        "insert | save undo redo | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | celleditable cellnoneditable | advcode code a11ychecker",
      content_css: ["//fonts.googleapis.com/css?family=Lato:300,300i,400,400i"],
      object_resizing: true,
      table_toolbar: true,
      images_upload_handler: function(blobInfo, success, failure) {},
      init_instance_callback: function(editor) {},
      save_onsavecallback: function(editor) {
        //Save button call back function //forced_root_blocks: false, //force_p_newlines: false, //statusbar: false, //menubar: false, //readonly: 1, //force_br_newlines: false, //skin_url: "/lightgray", //toolbar: false,
        var content = editor.getContent();
        console.log(content);
      },
      setup: function(editor) {
        editor.addButton("celleditable", {
          text: "Cell Editable",
          icon: false,
          onClick: function(evt) {
            var cellElm,
              cells = [];
            cells = editor.dom.select(
              "td[data-mce-selected],th[data-mce-selected]"
            );
            cellElm = editor.dom.getParent(
              editor.selection.getStart(),
              "td,th"
            );
            if (!cells.length && cellElm) {
              cells.push(cellElm);
            }
            cellElm = cellElm || cells[0];
            if (!cellElm) {
              return;
            }
            cells.map(function(aCell) {
              aCell.setAttribute("contenteditable", "true");
              editor.dom.setStyle(aCell, "background-color", "#d2ffd2");
              //aCell.style.backgroundColor = "#d2ffd2";
              return true;
            });
            editor.setDirty(true);
          }
        });

        // Table line - 5907
        editor.addButton("cellnoneditable", {
          text: "Cell Noneditable",
          icon: false,
          onClick: function(evt) {
            var cellElm,
              cells = [];
            var dom = editor.dom;
            cells = dom.select("td[data-mce-selected],th[data-mce-selected]");
            cellElm = dom.getParent(editor.selection.getStart(), "td,th");
            if (!cells.length && cellElm) {
              cells.push(cellElm);
            }
            cellElm = cellElm || cells[0];
            if (!cellElm) {
              return;
            }

            cells.map(function(aCell) {
              aCell.setAttribute("contenteditable", "false");
              editor.dom.setStyle(aCell, "background-color", "#f1f1f1");
              //aCell.style.backgroundColor = "#f1f1f1";
              return true;
            });
            editor.setDirty(true);
          }
        });
      }
    };
    return (
      <TinyEditorComponent
        apiKey={config.apiKey}
        init={initConfig}
        //initialValue={config.initialValue}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
