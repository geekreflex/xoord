import { useEditorContext } from '@/context/EditorContext';
import useStateWithHistory from '@/hooks/useStateWithHistory';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import { fabric } from 'fabric';
import History from './toolbox/History';

export default function Navbar() {
  const { controller, editor } = useEditorContext();
  const [canvas, setCanvas, { history, pointer, back, forward, go }] =
    useStateWithHistory(editor?.canvas.toJSON());

  useEffect(() => {
    if (editor) {
      // @ts-expect-error
      editor.canvas.on({
        'object:added': save,
        'object:modified': save,
        'selection:updated': save,
      });
    }
  }, [editor]);

  const save = (event: fabric.IEvent) => {
    console.log(event.action);
    setCanvas(editor?.canvas.toJSON());
  };

  const handleUndo = () => {
    back();
    updateCanvas();
  };

  const handleRedo = () => {
    forward();
    updateCanvas();
  };

  const updateCanvas = () => {
    editor?.canvas.clear();
    editor?.canvas.loadFromJSON(canvas, () => {
      editor.canvas.renderAll();
      setTimeout(() => {
        console.log(editor.canvas);
      }, 1000);
    });
  };

  // const updateCanvas = () => {
  //   delete canvas?.objects[0];
  //   console.log(canvas);

  //   editor?.canvas.loadFromJSON(canvas?.objects, () => {
  //     editor.canvas.add(editor.workspace!);
  //     editor.canvas.renderAll();
  //   });
  // };

  return (
    <NavbarWrap>
      <div>
        <History />
      </div>
    </NavbarWrap>
  );
}

const NavbarWrap = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  position: relative;
  z-index: 999;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
