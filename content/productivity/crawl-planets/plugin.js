class Plugin
{
  constructor()
  {
    this.minPlanetLevel = 3;
    this.maxEnergyPercent = 85;
    this.artiFlag = true;
    this.energyFlag = true;
    this.rechargeFlag == true;
    this.rangeFlag == true;
    this.speedFlag == true;
    this.defenseFlag == true;
  }
  render(container)
  {
    container.style.width = '200px';

    let stepperLabel = document.createElement('label');
    stepperLabel.innerText = 'Max % energy to spend';
    stepperLabel.style.display = 'block';

    let stepper = document.createElement('input');
    stepper.type = 'range';
    stepper.min = '0';
    stepper.max = '100';
    stepper.step = '5';
    stepper.value = `${this.maxEnergyPercent}`;
    stepper.style.width = '80%';
    stepper.style.height = '24px';

    let percent = document.createElement('span');
    percent.innerText = `${stepper.value}%`;
    percent.style.float = 'right';

    stepper.onchange = (evt) =>
    {
      percent.innerText = `${evt.target.value}%`;
      try
      {
        this.maxEnergyPercent = parseInt(evt.target.value, 10);
      }
      catch (e)
      {
        console.error('could not parse energy percent', e);
      }
    }

    let levelLabel = document.createElement('label');
    levelLabel.innerText = 'Min. planets to capture';
    levelLabel.style.display = 'block';

    let level = document.createElement('select');
    level.style.background = 'rgb(8,8,8)';
    level.style.width = '100%';
    level.style.marginTop = '10px';
    level.style.marginBottom = '10px';
    [0, 1, 2, 3, 4, 5, 6, 7].forEach(lvl =>
    {
      let opt = document.createElement('option');
      opt.value = `${lvl}`;
      opt.innerText = `Level ${lvl}`;
      level.appendChild(opt);
    }
    );
    level.value = `${this.minPlanetLevel}`;

    level.onchange = (evt) =>
    {
      try
      {
        this.minPlanetLevel = parseInt(evt.target.value);
      }
      catch (e)
      {
        console.error('could not parse planet level', e);
      }
    }

    let artifactFlagLabel = document.createElement('label');
    artifactFlagLabel.innerText = 'Artifact Planets Only?';
    artifactFlagLabel.style.display = 'block';

    let artifactFlag = document.createElement('input');
    artifactFlag.type = 'checkbox';
    artifactFlag.checked = `${this.artiFlag}`;
    artifactFlag.style.marginTop = '10px';
    artifactFlag.style.marginBottom = '10px';
    artifactFlag.style.height = '18px';
    artifactFlag.style.width = '18px';

    artifactFlag.onchange = (evt) =>
    {
      try
      {
        this.artiFlag = artifactFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the artifact flag', e);
      }
    }

    let energyFlagLabel = document.createElement('label');
    energyFlagLabel.innerText = 'Energy Buff Planets Only?';
    energyFlagLabel.style.display = 'block';

    let energyFlag = document.createElement('input');
    energyFlag.type = 'checkbox';
    energyFlag.checked = `${this.energyFlag}`;
    energyFlag.style.marginTop = '10px';
    energyFlag.style.marginBottom = '10px';
    energyFlag.style.height = '18px';
    energyFlag.style.width = '18px';

    energyFlag.onchange = (evt) =>
    {
      try
      {
        this.energyFlag = energyFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the energy flag', e);
      }
    }

    let rechargeFlagLabel = document.createElement('label');
    rechargeFlagLabel.innerText = 'Recharge Buff Planets Only?';
    rechargeFlagLabel.style.display = 'block';

    let rechargeFlag = document.createElement('input');
    rechargeFlag.type = 'checkbox';
    rechargeFlag.checked = `${this.rechargeFlag}`;
    rechargeFlag.style.marginTop = '10px';
    rechargeFlag.style.marginBottom = '10px';
    rechargeFlag.style.height = '18px';
    rechargeFlag.style.width = '18px';

    rechargeFlag.onchange = (evt) =>
    {
      try
      {
        this.rechargeFlag = rechargeFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the recharge flag', e);
      }
    }

    let rangeFlagLabel = document.createElement('label');
    rangeFlagLabel.innerText = 'Range Buff Planets Only?';
    rangeFlagLabel.style.display = 'block';

    let rangeFlag = document.createElement('input');
    rangeFlag.type = 'checkbox';
    rangeFlag.checked = `${this.rangeFlag}`;
    rangeFlag.style.marginTop = '10px';
    rangeFlag.style.marginBottom = '10px';
    rangeFlag.style.height = '18px';
    rangeFlag.style.width = '18px';

    rangeFlag.onchange = (evt) =>
    {
      try
      {
        this.rangeFlag = rangeFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the range flag', e);
      }
    }

    let speedFlagLabel = document.createElement('label');
    speedFlagLabel.innerText = 'Speed Buff Planets Only?';
    speedFlagLabel.style.display = 'block';

    let speedFlag = document.createElement('input');
    speedFlag.type = 'checkbox';
    speedFlag.checked = `${this.speedFlag}`;
    speedFlag.style.marginTop = '10px';
    speedFlag.style.marginBottom = '10px';
    speedFlag.style.height = '18px';
    speedFlag.style.width = '18px';

    speedFlag.onchange = (evt) =>
    {
      try
      {
        this.speedFlag = speedFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the speedflag', e);
      }
    }

    let defenseFlagLabel = document.createElement('label');
    defenseFlagLabel.innerText = 'Defense Buff Planets Only?';
    defenseFlagLabel.style.display = 'block';

    let defenseFlag = document.createElement('input');
    defenseFlag.type = 'checkbox';
    defenseFlag.checked = `${this.defenseFlag}`;
    defenseFlag.style.marginTop = '10px';
    defenseFlag.style.marginBottom = '10px';
    defenseFlag.style.height = '18px';
    defenseFlag.style.width = '18px';

    defenseFlag.onchange = (evt) =>
    {
      try
      {
        this.defenseFlag = defenseFlag.checked;
      }
      catch (e)
      {
        console.error('something went wrong with the defense flag', e);
      }
    }

    let button = document.createElement('button');
    button.style.width = '100%';
    button.innerHTML = 'Crawl!'
      button.onclick = () =>
    {
      let planet = ui.getSelectedPlanet();
      if (planet)
      {
        capturePlanets(
          planet.locationId,
          this.minPlanetLevel,
          this.maxEnergyPercent,
          this.artiFlag,
          this.energyFlag,
          this.rechargeFlag,
          this.rangeFlag,
          this.speedFlag,
          this.defenseFlag);
      }
      else
      {
        console.log('no planet selected');
      }
    }

    container.appendChild(stepperLabel);
    container.appendChild(stepper);
    container.appendChild(percent);
    container.appendChild(levelLabel);
    container.appendChild(level);
    container.appendChild(artifactFlagLabel);
    container.appendChild(artifactFlag);
    container.appendChild(energyFlagLabel);
    container.appendChild(energyFlag);
    container.appendChild(rechargeFlagLabel);
    container.appendChild(rechargeFlag);
    container.appendChild(rangeFlagLabel);
    container.appendChild(rangeFlag);
    container.appendChild(speedFlagLabel);
    container.appendChild(speedFlag);
    container.appendChild(defenseFlagLabel);
    container.appendChild(defenseFlag);

    container.appendChild(button);
  }
}

plugin.register(new Plugin());

function capturePlanets(fromId,
  minCaptureLevel,
  maxDistributeEnergyPercent,
  onlyArtifcatPlanets,
  onlyEnergyBuffPlanets,
  onlyRechargBuffPlanets,
  onlyRangeBuffPlanets,
  onlySpeedBuffPlanets,
  onlyDefenseBuffPlanets)
{
  const planet = df.getPlanetWithId(fromId);
  const from = df.getPlanetWithId(fromId);

  // Rejected if has pending outbound moves
  const unconfirmed = df.getUnconfirmedMoves().filter(move => move.from === fromId)
    if (unconfirmed.length !== 0)
    {
      return;
    }

    const candidates_ = df.getPlanetsInRange(fromId, maxDistributeEnergyPercent)
    .filter(p => p.owner !== df.account)
    .filter(p => p.owner === "0x0000000000000000000000000000000000000000")
    .filter(p => p.planetLevel >= minCaptureLevel)
    .map(to =>
  {
    return [to, distance(from, to)]
  }
    )
    .sort((a, b) => a[1] - b[1]);

  let i = 0;
  const energyBudget = Math.floor((maxDistributeEnergyPercent / 100) * planet.energy);

  let energySpent = 0;
  while (energyBudget - energySpent > 0 && i < candidates_.length)
  {

    const energyLeft = energyBudget - energySpent;

    // Remember its a tuple of candidates and their distance
    const candidate = candidates_[i++][0];
    //console.log(candidate);

    // Reject if it's not mineable and the artifact flag is setActive
    if (onlyArtifcatPlanets && !df.isPlanetMineable(candidate))
    {
      continue;
    }

    //reject if it's not energy buff and the energy buff flag is set
    if (onlyEnergyBuffPlanets && !isEnergyCapBoosted(candidate.locationId))
    {
      continue;
    }

    // reject if it's not recharge buff and the recharge flag is set
    if (onlyRechargBuffPlanets && !isEnergyGrowthBoosted(candidate.locationId))
    {
      continue;
    }

    // reject if it's not range buff and the range flag is set
    if (onlyRangeBuffPlanets && !isRangeBoosted(candidate.locationId))
    {
      continue;
    }

    // reject if it's not speed buff and the speed flag is set
    if (onlySpeedBuffPlanets && !isSpeedBoosted(candidate.locationId))
    {
      continue;
    }

    // reject if it's not defense buff and the defense flag is set
    if (onlyDefenseBuffPlanets && !isDefenseBoosted(candidate.locationId))
    {
      continue;
    }

    // Rejected if has unconfirmed pending arrivals
    const unconfirmed = df.getUnconfirmedMoves().filter(move => move.to === candidate.locationId)
      if (unconfirmed.length !== 0)
      {
        continue;
      }

      // Rejected if has pending arrivals
      const arrivals = getArrivalsForPlanet(candidate.locationId);
    if (arrivals.length !== 0)
    {
      continue;
    }

    const energyArriving = (candidate.energyCap * 0.15) + (candidate.energy * (candidate.defense / 100));
    // needs to be a whole number for the contract
    const energyNeeded = Math.ceil(df.getEnergyNeededForMove(fromId, candidate.locationId, energyArriving));
    if (energyLeft - energyNeeded < 0)
    {
      continue;
    }

    console.log(`df.move("${fromId}","${candidate.locationId}",${energyNeeded},0)`);
    df.move(fromId, candidate.locationId, energyNeeded, 0);
    energySpent += energyNeeded;
  }
}

function getArrivalsForPlanet(planetId)
{
  return df.getAllVoyages().filter(arrival => arrival.toPlanet === planetId);
}

//returns tuples of [planet,distance]
function distance(from, to)
{
  let fromloc = from.location;
  let toloc = to.location;
  return Math.sqrt((fromloc.coords.x - toloc.coords.x) ** 2 + (fromloc.coords.y - toloc.coords.y) ** 2);
}

// byte 9: energy cap bonus if byte is < 16
function isEnergyCapBoosted(locationId)
{
  return locationId.charAt(18) === "0";
}

// byte 10: energy grow bonus if byte is < 16
function isEnergyGrowthBoosted(locationId)
{
  return locationId.charAt(20) === "0";
}

// byte 11: range bonus if byte is < 16
function isRangeBoosted(locationId)
{
  return locationId.charAt(22) === "0";
}

// byte 12: speed bonus if byte is < 16
function isSpeedBoosted(locationId)
{
  return locationId.charAt(24) === "0";
}

// byte 13: defense bonus if byte is < 16
function isDefenseBoosted(locationId)
{
  return locationId.charAt(26) === "0";
}
