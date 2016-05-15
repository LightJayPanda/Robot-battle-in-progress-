// robot1 attack robot2
// Robot.prototype.attack = ...
// Robot.prototype.recieve_damage = ...
// 
// Реализовать можно
// robot1.attack(robot2) ->
//     robot2.receieve_damage(robot1.weapon.damage)

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