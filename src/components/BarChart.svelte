<script lang="ts">
	import { onMount } from "svelte";
  
	interface FlagData {
	  [key: string]: [number, number];
	}
  
	let redFlags: FlagData = {};
	let stats: { flagName: string; correct: number; total: number; percentage: number }[] = [];
  
	function getBarClass(percentage: number): string {
	  if (percentage < 40) return "bg-danger";
	  if (percentage < 70) return "bg-warning text-dark";
	  return "bg-success";
	}
  
	// Function to compute stats from flag data.
	function computeStats(flags: FlagData) {
	  return Object.entries(flags)
		.map(([flagName, [correct, total]]) => {
		  const percentage = total > 0 ? (correct / total) * 100 : 0;
		  return { flagName, correct, total, percentage };
		})
		.sort((a, b) => b.percentage - a.percentage);
	}
  
	onMount(() => {
	  const storedRedFlags = localStorage.getItem("redFlags");
	  redFlags = storedRedFlags ? JSON.parse(storedRedFlags) : {};
	  stats = computeStats(redFlags);
	});
  </script>
  
  <div class="container my-4" style="max-width: 700px;">
	{#each stats as stat (stat.flagName)}
	  <div class="d-flex align-items-center mb-3 stat-row">
		<span class="flag-label me-3">{stat.flagName}</span>
		<div class="progress flex-grow-1">
		  <div
			class={`progress-bar progress-bar-striped ${getBarClass(stat.percentage)}`}
			role="progressbar"
			style={`width: ${stat.percentage}%;`}
			aria-valuenow={stat.percentage}
			aria-valuemin="0"
			aria-valuemax="100"
		  >
			{stat.percentage.toFixed(1)}%
		  </div>
		</div>
		<span class="ms-3">{stat.correct} / {stat.total}</span>
	  </div>
	{/each}
  </div>
  
  <style>
	.stat-row {
	  transition: transform 0.2s;
	}
	.stat-row:hover {
	  transform: scale(1.02);
	}
	.flag-label {
	  min-width: 120px;
	  font-weight: 500;
	}
	.progress {
	  height: 20px;
	  overflow: hidden;
	  margin-right: 10px;
	}
	.progress-bar {
	  transition: width 0.8s ease-in-out;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-size: 0.9rem;
	  font-weight: bold;
	}
</style>
  