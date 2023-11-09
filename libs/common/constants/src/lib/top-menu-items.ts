export const topMenuItems = [
  {
    id: 'app-name',
    text: 'The Canvas Paint',
    isBold: true,
    subMenuItems: [
      {
        id: 'about',
        text: 'About the Canvas Paint',
        isDisabled: true,
      },
      {
        id: 'preferences',
        text: 'Preferences',
        shortcut: '⌘,',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'quit',
        text: 'Quit',
        shortcut: '⌘Q',
        isDisabled: false,
      },
    ],
  },
  {
    id: 'file',
    text: 'File',
    isBold: false,
    subMenuItems: [
      {
        id: 'new',
        text: 'New',
        shortcut: '⌘N',
        isDisabled: true,
      },
      {
        id: 'open',
        text: 'Open',
        shortcut: '⌘O',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'save',
        text: 'Save',
        shortcut: '⌘S',
        isDisabled: false,
      },
      {
        id: 'save-as',
        text: 'Save As',
        shortcut: '⌘⇧S',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'print',
        text: 'Print',
        shortcut: '⌘P',
        isDisabled: false,
      },
    ],
  },
  {
    id: 'edit',
    text: 'Edit',
    isBold: false,
    subMenuItems: [
      {
        id: 'cut',
        text: 'Cut',
        shortcut: '⌘X',
        isDisabled: true,
      },
      {
        id: 'copy',
        text: 'Copy',
        shortcut: '⌘C',
        isDisabled: true,
      },
      {
        id: 'paste',
        text: 'Paste',
        shortcut: '⌘V',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'tools',
    text: 'Tools',
    isBold: false,
    subMenuItems: [
      {
        id: 'pen',
        text: 'Pen',
        shortcut: '⇧P',
        isDisabled: false,
      },
      {
        id: 'brush',
        text: 'Brush',
        shortcut: '⇧B',
        isDisabled: false,
      },
      {
        id: 'spray',
        text: 'Spray',
        shortcut: '⇧S',
        isDisabled: false,
      },
      {
        id: 'blur',
        text: 'Blur',
        shortcut: '⇧U',
        isDisabled: false,
      },
      {
        id: 'eraser',
        text: 'Eraser',
        shortcut: '⇧E',
        isDisabled: false,
      },
    ],
  },
  {
    id: 'image',
    text: 'Image',
    isBold: false,
    subMenuItems: [
      {
        id: 'rotate-right',
        text: 'Rotate right',
        shortcut: '⌘R',
        isDisabled: true,
      },
      {
        id: 'rotate-left',
        text: 'Rotate left',
        shortcut: '⌘⇧R',
        isDisabled: true,
      },
      {
        id: 'flip-horizontal',
        text: 'Flip horizontal',
        shortcut: '⌘H',
        isDisabled: true,
      },
      {
        id: 'flip-vertical',
        text: 'Flip vertical',
        shortcut: '⌘⇧H',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'resize',
        text: 'Resize',
        shortcut: '⌘⇧I',
        isDisabled: true,
      },
      {
        id: 'crop',
        text: 'Crop',
        shortcut: '⌘⇧C',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'help',
    text: 'Help',
    isBold: false,
    subMenuItems: [
      {
        id: 'license',
        text: 'License',
        isDisabled: false,
      },
      {
        id: 'privacy',
        text: 'Privacy',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'github',
        text: 'Github documentation',
        isDisabled: false,
      },
    ],
  },
];
