const solution = (N,stages)=>{
    const stageFailed= [];
    let playersRemaining = stages.length;


  for (let i = 1; i <= N; i++) {
    const currentStagePlayers = stages.filter(stage => stage === i).length;
    const failureRate = playersRemaining === 0 ? 0 : currentStagePlayers / playersRemaining;
    stageFailed.push({ stage: i, failureRate });
    playersRemaining -= currentStagePlayers;
  }

  return stageFailed
    .sort((a, b) => b.failureRate - a.failureRate || a.stage - b.stage)
    .map(item => item.stage);
};