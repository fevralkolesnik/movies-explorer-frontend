import "./MainBlocks.css";

export default function MainBlocks(props) {
  const { title, name, arialabel, children } = props;

  return (
    <section
      className={`main-blocks main-blocks_type_${name}`}
      aria-label={arialabel}
      id={name}
    >
      <div className="main-blocks__title-container">
        <h2 className="main-blocks__title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
