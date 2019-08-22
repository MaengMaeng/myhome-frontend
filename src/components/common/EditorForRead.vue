<template>
<div class="editor-read">
  <editor-content class="editor__content-read" :editor="editor" editable="false"/>
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
  },
  props:{
    content:{type:String, default:"씨발"}
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
        editable:false,
        content: this.$props.content
      }),
    }
  },
  created(){
    console.log("read");
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>

<style media="screen">
.editor__content-read{
  /* border: 0.5px solid rgba(0,0,0,.1); */
  padding: 10px;
  margin: 10px;
}

.editor__content-read > div:focus{
  outline: none !important;
  border: none !important;
}
.editor-read p{
  text-align: left;
}

.editor-read code{
  width: 100%;
  padding: 10px 5px;
  margin: 2px 20px;
  background: black !important;
  color: white !important;
  font-size: 12px !important;
}

.editor-read img{
  margin: 0 auto;
  max-height: 30%;
  max-width: 30%;
}
</style>
