import { toast as reactToast } from 'react-toastify';

interface ToastProps {
  title?: React.ReactNode;
  action?: ActionProps;
}

interface ActionProps {
  text: string;
  onClick: () => void;
}

interface TitleProps {
  children: React.ReactNode;
  action?: ActionProps;
}

const Title: React.FC<TitleProps> = ({ children, action }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="max-w-170px text-sm font-normal text-white">{children}</p>
      {action ? (
        <button
          className="flex-none px-4 text-base font-medium text-blue-300"
          onClick={action.onClick}
        >
          {action.text}
        </button>
      ) : null}
    </div>
  );
};

const toast = {
  success: ({ title, action }: ToastProps) => {
    reactToast.success(<Title action={action}>{title}</Title>, {
      position: 'bottom-left',
      autoClose: 50000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      icon: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  },
  error: ({ title, action }: ToastProps) => {
    reactToast.error(<Title action={action}>{title}</Title>, {
      position: 'bottom-left',
      autoClose: 50000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      icon: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  },
  info: ({ title, action }: ToastProps) => {
    reactToast.info(<Title action={action}>{title}</Title>, {
      position: 'bottom-left',
      autoClose: 50000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      icon: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  },
  warning: ({ title, action }: ToastProps) => {
    reactToast.warning(<Title action={action}>{title}</Title>, {
      position: 'bottom-left',
      autoClose: 50000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      icon: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  },
};

export default toast;
