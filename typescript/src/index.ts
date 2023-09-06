import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";

const rect: Shape = Rectangle(2, 3)
const renderer = newRenderer(rect)
renderer.draw();