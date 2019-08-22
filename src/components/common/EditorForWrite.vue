<template>
<div class="editor-write">
  <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
    <div class="menubar-write">

      <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
        <v-icon>format_bold</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
        <v-icon>format_italic</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
        <v-icon>strikethrough_s</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
        <v-icon>format_underlined</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.code() }" @click="commands.code">
        <v-icon>code</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">
        H1
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
        H2
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">
        H3
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
        <v-icon>format_list_bulleted</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
        <v-icon>format_list_numbered
        </v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
        <v-icon>format_quote</v-icon>
      </button>

      <button class="menubar__button" :class="{ 'is-active': isActive.code_block() }" @click="commands.code_block">
        <v-icon>code</v-icon>
      </button>

      <button class="menubar__button" @click="commands.horizontal_rule">
        line
      </button>

      <button class="menubar__button" @click="commands.undo">
        <v-icon>undo</v-icon>
      </button>

      <button class="menubar__button" @click="commands.redo">
        <v-icon>redo</v-icon>
      </button>

    </div>
  </editor-menu-bar>

  <editor-content class="editor__content-write" :editor="editor"/>
</div>
</template>

<script>
import {
  Editor,
  EditorContent,
  EditorMenuBar
} from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,

} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Image(),
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({
            levels: [1, 2, 3]
          }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods:{
    getContent(){
      return this.editor.getHTML();
    }
  }
}
</script>

<style media="screen">
  .menubar-write{
    border: 2px solid rgba(0,0,0,.54);
    border-radius: 5px;
  }

  .menubar-write > .menubar__button{
    color:rgba(0,0,0,.54) !important;
    font-weight: bold;
    height: 40px;
    width: 40px;
    margin: 2px;
    padding: 0px;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-font-feature-settings: "liga";
    font-feature-settings: "liga";
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1;
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    transition: .3s cubic-bezier(.25,.8,.5,1);
    vertical-align: text-bottom;
  }

  .menubar-write > .menubar__button:hover{
    background-color: rgba(0,0,0,.05);
  }

  .menubar-write > .is-active{
    background-color: rgba(0,0,0,.1);
  }

  .editor__content-write{
    border: 0.5px solid rgba(0,0,0,.1);
    padding: 10px;
    margin: 10px;
    height: 700px;
    overflow: scroll;
  }

  .editor__content-write > div:focus{
    outline: none !important;
    border: none !important;
    height: 100% !important;
  }
  .editor-write p{
    text-align: left;
  }

  .editor-write code{
    width: 100%;
    padding: 10px 5px;
    margin: 2px;
    background: black !important;
    color: white !important;
    font-size: 12px !important;
  }

  .editor-write img{
    margin: 0 auto;
    max-height: 30%;
    max-width: 30%;
  }
</style>
