interface Props {
  src: string;
  alt?: string;
  widthClass?: string;
  tooltip?: boolean;
  dataTip?: string;
  className?: string;
}

function Avatar({
  src,
  alt = '',
  widthClass = 'w-8',
  tooltip = false,
  dataTip = '',
  className,
}: Props) {
  return (
    <div className={`avatar${tooltip ? ' md:tooltip' : ''}`} data-tip={dataTip}>
      <div className={`${widthClass} ${className}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
