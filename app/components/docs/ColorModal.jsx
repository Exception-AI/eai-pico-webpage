import { useEffect } from "react";
import { use100vh } from "react-div-100vh";
import Code from "~/components/Code";
import Close from "~/components/icons/Close";
import {
  getColorFromNextColorFamily,
  getColorFromPreviousColorFamily,
  getColorName,
  getHexValue,
  getMainHexValue,
  getNextColor,
  getPreviousColor,
  getRgbValue,
  sentenceCase,
} from "~/utils";

export default function ColorModal({ color, isOpen, onClose, setSelectedColor, ...props }) {
  const backgroundColorClassName = `pico-background-${color.family}-${color.shade}`;
  const hexValue = getHexValue(color);
  const rgbValue = getRgbValue(color);
  const colorName = getColorName(color);
  const mainHexValue = getMainHexValue(color);

  // Handle click on overlay
  const handleClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose(event);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const nextColor = getNextColor(color);
    const previousColor = getPreviousColor(color);
    const nextColorFamily = getColorFromNextColorFamily(color);
    const previousColorFamily = getColorFromPreviousColorFamily(color);

    // Key up: previous color family
    const handleKeyUp = (event) => {
      if (event.key === "ArrowUp") {
        setSelectedColor({
          family: previousColorFamily.family,
          shade: previousColorFamily.shade,
        });
      }
    };

    // Key right: next color
    const handleKeyRight = (event) => {
      if (event.key === "ArrowRight") {
        setSelectedColor({
          family: nextColor.family,
          shade: nextColor.shade,
        });
      }
    };

    // Key down: next color family
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        setSelectedColor({
          family: nextColorFamily.family,
          shade: nextColorFamily.shade,
        });
      }
    };

    // Key left: previous color
    const handleKeyLeft = (event) => {
      if (event.key === "ArrowLeft") {
        setSelectedColor({
          family: previousColor.family,
          shade: previousColor.shade,
        });
      }
    };

    document.addEventListener("keydown", handleKeyUp);
    document.addEventListener("keydown", handleKeyRight);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", handleKeyLeft);

    return () => {
      document.removeEventListener("keydown", handleKeyUp);
      document.removeEventListener("keydown", handleKeyRight);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyLeft);
    };
  }, [setSelectedColor, onClose, color]);

  const viewportHeight = use100vh();
  const modalHeight = viewportHeight ? `calc(${viewportHeight}px - 2rem)` : "calc(100vh - 2rem)";

  if (!isOpen && !color.hex) return null;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog open={isOpen} className={`color`} onClick={handleClickOverlay} {...props}>
      <article style={{ "--pico-glowing-color": `${mainHexValue}26`, maxHeight: modalHeight }}>
        <header className={backgroundColorClassName}>
          <a href="#close" rel="prev" aria-label="Close" className="close" onClick={onClose}>
            <Close />
          </a>
          <hgroup>
            <h3 className="color-family">
              {sentenceCase(color.family)}&nbsp;{color.shade}
            </h3>
            <p className="color-shade">{colorName}</p>
          </hgroup>
        </header>
        <div className="grid">
          <p>Hexadecimal color</p>
          <Code className="small">{hexValue.toUpperCase()}</Code>
          <p>RGB color</p>
          <Code className="small">{rgbValue}</Code>
          <p>Sass variable</p>
          <Code className="small">{`$${color.family}-${color.shade}`}</Code>
          <p>Color utility class</p>
          <Code className="small">{`pico-color-${color.family}-${color.shade}`}</Code>
          <p>Background utility class</p>
          <Code className="small">{`pico-background-${color.family}-${color.shade}`}</Code>
          <p>CSS variable</p>
          <Code className="small">{`var(--pico-color-${color.family}-${color.shade})`}</Code>
        </div>
      </article>
    </dialog>
  );
}
