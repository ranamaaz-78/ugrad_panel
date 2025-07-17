import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OvalItem {
  id: string;
  label: string;
  x: number; // percentage (0 to 1)
  y: number; // percentage (0 to 1)
  isInContainer: boolean;
  zIndex: number;
}

export default function DraggableOvals() {
  const [ovals, setOvals] = useState<OvalItem[]>([
    {
      id: "business",
      label: "Business",
      x: 0.5,
      y: 0.35,
      isInContainer: false,
      zIndex: 1,
    },
    {
      id: "data",
      label: "Data",
      x: 0.13,
      y: 0.45,
      isInContainer: false,
      zIndex: 2,
    },
    {
      id: "growth",
      label: "Growth",
      x: 0.53,
      y: 0.63,
      isInContainer: false,
      zIndex: 3,
    },
    {
      id: "product",
      label: "Product",
      x: 0.73,
      y: 0.63,
      isInContainer: false,
      zIndex: 4,
    },
    {
      id: "tech",
      label: "Tech",
      x: 0.2,
      y: 0.73,
      isInContainer: false,
      zIndex: 5,
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({
    width: 604,
    height: 360,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setDraggedItem(id);

    setOvals((prev) =>
      prev.map((o) =>
        o.id === id
          ? { ...o, zIndex: Math.max(...prev.map((p) => p.zIndex)) + 1 }
          : o
      )
    );

    e.preventDefault();
  };

  const checkAndResolveCollisions = (
    draggingId: string,
    newX: number,
    newY: number
  ) => {
    const radius = 40;
    const minDist = radius * 2;

    setOvals((prev) => {
      const draggingOval = prev.find((o) => o.id === draggingId);
      if (!draggingOval) return prev;

      return prev.map((oval) => {
        if (oval.id === draggingId) {
          return {
            ...oval,
            x: newX / containerSize.width,
            y: newY / containerSize.height,
          };
        }

        const otherX = oval.x * containerSize.width;
        const otherY = oval.y * containerSize.height;

        const dx = newX - otherX;
        const dy = newY - otherY;
        const dist = Math.hypot(dx, dy);

        if (dist < minDist) {
          const angle = Math.atan2(dy, dx);
          const pushDistance = minDist - dist;
          const pushX = otherX - Math.cos(angle) * pushDistance;
          const pushY = otherY - Math.sin(angle) * pushDistance;

          const maxX = containerSize.width - 80;
          const maxY = containerSize.height - 80;

          return {
            ...oval,
            x: Math.max(0, Math.min(pushX, maxX)) / containerSize.width,
            y: Math.max(0, Math.min(pushY, maxY)) / containerSize.height,
          };
        }

        return oval;
      });
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedItem || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    const maxX = containerSize.width - 80;
    const maxY = containerSize.height - 80;

    const constrainedX = Math.max(0, Math.min(newX, maxX));
    const constrainedY = Math.max(0, Math.min(newY, maxY));

    checkAndResolveCollisions(draggedItem, constrainedX, constrainedY);
  };

  const handleMouseUp = () => {
    if (!draggedItem || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const oval = ovals.find((o) => o.id === draggedItem);
    if (!oval) return;

    const dropZone = {
      x: containerRect.width * 0.1,
      y: containerRect.height * 0.4,
      width: containerRect.width * 0.8,
      height: containerRect.height * 0.25,
    };

    const x = oval.x * containerSize.width;
    const y = oval.y * containerSize.height;

    const isInDropZone =
      x >= dropZone.x &&
      x <= dropZone.x + dropZone.width &&
      y >= dropZone.y &&
      y <= dropZone.y + dropZone.height;

    setOvals((prev) =>
      prev.map((o) =>
        o.id === draggedItem ? { ...o, isInContainer: isInDropZone } : o
      )
    );

    setDraggedItem(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-[20px] overflow-hidden w-full max-w-[604px] h-[360px] mt-4 md:mt-0"
      style={{ backgroundColor: "#0A2628" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setDraggedItem(null)}
    >
      {/* Background circles */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 604 755"
        className="absolute inset-0"
        style={{ opacity: 0.06 }}
        preserveAspectRatio="xMidYMid meet"
      >
        {[620, 570, 520, 470, 420, 370, 320, 270, 220, 170].map((radius) => (
          <circle
            key={radius}
            cx="302"
            cy="377"
            r={radius}
            stroke="white"
            strokeWidth="1.6"
            fill="none"
          />
        ))}
      </svg>

      {/* Header text */}
      <div className="absolute top-8 left-6 right-6">
        <p className="text-white text-lg font-sans text-justify leading-[22px] md:leading-normal">
          From zero to standout - learn what top companies need in product,
          growth, business, tech, data & more. UGRAD gives you the skills,
          guidance, and support to rise
        </p>
      </div>

      {/* Draggable circles */}
      {ovals.map((oval) => (
        <motion.div
          key={oval.id}
          onMouseDown={(e) => handleMouseDown(e, oval.id)}
          animate={{
            left: oval.x * containerSize.width,
            top: oval.y * containerSize.height,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "absolute",
            width: 94,
            height: 56,
            borderRadius: "60px",
            zIndex: oval.zIndex,
            backgroundColor: oval.isInContainer
              ? "rgba(255, 255, 255, 0.3)"
              : "#003C3F",
            border: "2px solid rgba(255,255,255,0.6)",
            color: "white",
            fontSize: "16px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: draggedItem === oval.id ? "grabbing" : "grab",
            userSelect: "none",
            fontFamily: "sora",
          }}
        >
          {oval.label}
        </motion.div>
      ))}
    </div>
  );
}
