function random(min, max) {		//	вспомогательная функция для последующего использования
        return Math.round(Math.random() * (max - min) + min);
    }

// описание типов оружия. типы в массиве для простоты расширения проекта в дальнейшем
Weapon.types = ['singleWeapon', 'areaWeapon'];

function Weapon() {
    var name = name;
    //var type = random(0, 1) == 0 ? 'singleWeapon' : 'areaWeapon';
    var type = Weapon.types[random(0, Weapon.types.length - 1)];
    var damage = random(5, 20);

    this.attack = function (targetRobot, agressor) {
        switch (type) {
            case 'singleWeapon':
                console.log( agressor.name + ' has dealed ' + damage + ' damage points to ' + targetRobot.name );
                targetRobot.receiveDamage(damage);
                break;
            case 'areaWeapon':
                console.log( agressor.name + ' hits the battleground with area strike with the following damage: ' + damage);
                agressor.battle.damageAll(damage, agressor);
                break;
            default:
                console.warn('Unhandled weapon type');
        }
    }
}

function Robot(name) {
    var MIN_HP = 20;
    var MAX_HP = 50;
    var weapon = new Weapon();
    var hp = random(MIN_HP, MAX_HP);
    var receivedDamage = 0;

    this.name = name;
    this.alive = true;

    this.attack = function () {
        weapon.attack(this.battle.selectRandomActiveRobot(this), this);
    };

    this.receiveDamage = function (damageAmount) {
        receivedDamage += damageAmount;
        if (receivedDamage >= hp) {
            this.battle.killRobot(this);
        }
    };
}

function Battle () {
        var activeRobots = [];
        var deadRobots = [];
        var minAmountOfRobotsToStartBattle = random(2, Battle.maxAmountOfRobots);
        console.log('Creating battle: need ' + minAmountOfRobotsToStartBattle + ' to start the battle');

        var self = this;

        this.addRobot = function (robot) {
            var amountOfRobots = activeRobots.length;
            if (amountOfRobots >= Battle.maxAmountOfRobots) {
                console.warn('Please wait till battle is over');
                return false;
            }
            activeRobots.push(robot);
            robot.battle = this;
            //if we have enough robots, start battle
            if (++amountOfRobots === minAmountOfRobotsToStartBattle) {
                this.started = true;
                setRandomDamage();
            }
            return true;
        };

        this.killRobot = function (robot) {
            console.log(robot.name + ' died');
            robot.alive = false;
            deadRobots.push(robot);
            activeRobots.splice(activeRobots.indexOf(robot), 1);
            //if we have a winner (or everybody died)
            if (activeRobots.length <= 1) {
                this.completed = true;
                console.log('Battle completed, winner: ', activeRobots[0]);
            }
        };

        //if there are few robots
        this.selectRandomActiveRobot = function (exclude) {
            let robotsToSelectFrom = activeRobots;
            if (exclude) { //select from robots excluding passed one
                robotsToSelectFrom = [];
                activeRobots.forEach(function (robot) {
                    if (robot !== exclude) {
                        robotsToSelectFrom.push(robot);
                    }
                });
            }
            return robotsToSelectFrom[random(0, robotsToSelectFrom.length - 1)];
        };

        //if there are many robots
        this.selectRandomActiveRobot2 = function (exclude) {
            let selected = activeRobots[random(0, activeRobots.length - 1)];
            if (selected === exclude) {
                return self.selectRandomActiveRobot2(exclude);
            }
            return selected;
        };

        this.damageAll = function (damage, agressor) {
            activeRobots.forEach(function (robot) {
                if (robot !== agressor) {
                    robot.receiveDamage(damage);
                }
            });
        };


function battleGround() {

var robots = [0];
var graveYard = [0];
var winner = 'noWinnerYet';
var MIN_ROBOT_AMOUNT = 2;
var MAX_ROBOT_AMOUNT = 20;

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function attack() {
	var targetRobot = robots.random();
	if ((this.weapon.type == singleWeapon && (targetRobot != this)) {
		targetRobot.receiveDamage()
	} else if (this.weapon.type == areaWeapon) {
		for (i = 0; i <= robots.length; i++) {
			if (targetRobot != this) {
				robot.receiveDamage;
			}
		}
	};

	//	receiveDamage here?
	// ---------------------------------------------------------------------------------------
	// 	Robot.receiveDamage(points) {	// should I move this section to attack() ?
	//     targetRobot.hp -= points;
	    
	//     if (points < targetRobot.hp) {
	//       targetRobot.hp =- points;
	//       console.log( robot + ' hits ' + targetRobot + '. ' targetRobot ' loses '+ points + 'hp'); 
	//     }
	//     if (damage >= targetRobot.hp) {
	//       targetRobot.hp = 0;
	//       targetRobot.alive = false;
	//       graveYard.join(targetRobot);
	//       console.log( targetRobot + ' was destroyed');
	//     }
	//   	Robot.prototype.dealDamage(points) {
	//   		if (this.weapon.type = singleWeapon) {
	//   			var targetRobot = robots.random(i);
	//   			targetRobot.receiveDamage();
	//   			}		
	//   		}
	//   	}
	// ---------------------------------------------------------------------------------------

}

function Weapon(type) {
	this.name = name;
	this.type = type;
	this.damage = random(5, 20);
}

function createWeapon() {
	var type = random(0, 1) == 0 ? 'singleWeapon' : 'areaWeapon';
	return new Weapon(type);
}

function Robot(name) {
	this.name = name;
	var hp = random(20, 50);
	this.alive = true;
	this.weapon = createWeapon();
// ---------------------------------------------------------------------------------------
	Robot.receiveDamage(points) {	// should I move this section to attack() ?
    targetRobot.hp -= points;
    
    if (points < targetRobot.hp) {
      targetRobot.hp =- points;
      console.log( robot + ' hits ' + targetRobot + '. ' targetRobot ' loses '+ points + 'hp'); 
    }

    if (damage >= targetRobot.hp) {
      targetRobot.hp = 0;
      targetRobot.alive = false;
      graveYard.join(targetRobot);
      console.log( targetRobot + ' was destroyed');
    }

  	Robot.prototype.dealDamage(points) {
  		if (this.weapon.type = singleWeapon) {
  			var targetRobot = robots.random(i);
  			targetRobot.receiveDamage();
  		}
  			
  		}
  	}
// ---------------------------------------------------------------------------------------
 	this.setDamage = function(robot, points) {
    if (damage <= 0) {
    	throw new Error('Damage must be positive');
    };

    if (damage > 20) {
    	throw new Error('Damage cannot exceed 20');
    };
	damage = points;
  };

}

// -----------------------------

function createBattle(robots) {
	var battleGround = [];
	
	function addRobot() {
		for ( var i = MIN_ROBOT_AMOUNT; i <= MAX_ROBOT_AMOUNT; i++)
		var robot = new Robot('Robot ' + i);
			battleGround.join(robot);
		return battleGround
	};
	return battleGround; // ?
}

console.log("В ходе битвы убиты роботы: " + graveYard + "; победил робот " + winner);

}