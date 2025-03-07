"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./NetworkingMap.module.css";

const NetworkingMap = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const width = 800; // Fixed width
    const height = 600; // Fixed height

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const nodes = [
      { id: "user", type: "user", name: "You", size: 15 },
      { id: "keynote1", type: "speaker", name: "Dr. Sarah Johnson", size: 12 },
      { id: "keynote2", type: "speaker", name: "Prof. James Chen", size: 12 },
      { id: "workshop1", type: "workshop", name: "Smart Cities Workshop", size: 10 },
      { id: "workshop2", type: "workshop", name: "Infrastructure Workshop", size: 10 },
      { id: "company1", type: "company", name: "TechBuild Inc.", size: 8 },
      { id: "company2", type: "company", name: "StructSmart", size: 8 },
      { id: "company3", type: "company", name: "GeoFuture", size: 8 },
      { id: "attendee1", type: "attendee", name: "Michael R.", size: 6 },
      { id: "attendee2", type: "attendee", name: "Lisa T.", size: 6 },
      { id: "attendee3", type: "attendee", name: "Robert K.", size: 6 },
      { id: "attendee4", type: "attendee", name: "Emma S.", size: 6 },
      { id: "attendee5", type: "attendee", name: "David M.", size: 6 },
    ];

    const links = [
      { source: "user", target: "keynote1" },
      { source: "user", target: "workshop1" },
      { source: "user", target: "workshop2" },
      { source: "user", target: "company1" },
      { source: "user", target: "attendee1" },
      { source: "user", target: "attendee2" },
      { source: "keynote1", target: "keynote2" },
      { source: "keynote1", target: "company1" },
      { source: "keynote1", target: "company2" },
      { source: "keynote2", target: "workshop2" },
      { source: "workshop1", target: "attendee1" },
      { source: "workshop1", target: "attendee3" },
      { source: "workshop2", target: "attendee2" },
      { source: "workshop2", target: "attendee4" },
      { source: "company1", target: "company2" },
      { source: "company2", target: "company3" },
      { source: "company3", target: "attendee5" },
      { source: "attendee1", target: "attendee2" },
      { source: "attendee3", target: "attendee4" },
    ];

    const colorScale = d3.scaleOrdinal()
      .domain(["user", "speaker", "workshop", "company", "attendee"])
      .range(["#00fffc", "#9d00ff", "#ff00a0", "#ffc400", "#47d7ff"]);

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(120).strength(0.3))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => d.size + 10));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.6);

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", d => d.size)
      .attr("fill", d => colorScale(d.type))
      .attr("stroke", "#05070f")
      .attr("stroke-width", 2)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x = Math.max(d.size, Math.min(width - d.size, d.x)))
        .attr("cy", d => d.y = Math.max(d.size, Math.min(height - d.size, d.y)));
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg ref={svgRef} className={styles.svg}></svg>
    </div>
  );
};

export default NetworkingMap;
