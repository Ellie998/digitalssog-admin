import { cn } from '@/lib/utils';
import classes from './postit.module.css';

const Postit = ({
  title,
  content,
  className,
}: {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(classes.container, className)}>
      <div className={cn(classes.title, 'mb-2')}>{title ? title : null}</div>
      <div className={classes.content}>{content ? content : null}</div>
    </div>
  );
};

export default Postit;
