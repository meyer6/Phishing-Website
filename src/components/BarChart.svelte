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
  
<div class="container my-4" style="max-width: 800px;">
	{#each stats as stat (stat.flagName)}
	  <div class="stat-row">
		<span class="flag-label">{stat.flagName}</span>
		<div class="progress-wrapper">
		  <div class="progress">
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
		</div>
		<span class="score">{stat.correct} / {stat.total}</span>
	  </div>
	{/each}
</div>
  
<style>
	/* Use grid layout to ensure fixed column widths */
	.stat-row {
	  display: grid;
	  grid-template-columns: 200px 1fr 100px;
	  align-items: center;
	  margin-bottom: 1rem;
	  transition: transform 0.2s;
	}
	.stat-row:hover {
	  transform: scale(1.02);
	}
	.flag-label {
	  font-weight: 500;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
	.progress-wrapper {
	  width: 100%;
	}
	.progress {
	  width: 100%;
	  height: 20px;
	  overflow: hidden;
	  margin-right: 10px;
	  border-radius: 4px;
	}
	.progress-bar {
	  transition: width 0.8s ease-in-out;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  font-size: 0.9rem;
	  font-weight: bold;
	}
	.score {
	  text-align: right;
	}
</style>
