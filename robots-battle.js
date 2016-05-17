//	вспомогательная функция для последующего использования
function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

// описание типов оружия. типы в массиве для простоты расширения проекта в дальнейшем
Weapon.types = ['singleWeapon', 'areaWeapon'];

//	описание оружия
function Weapon() {
    var name = name;
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
                agressor.battleGround.damageAll(damage, agressor);
                break;
            default:
                console.warn('Unhandled weapon type');
        }
    }
}

// описание робота
function Robot(name) {
    var MIN_HP = 20;
    var MAX_HP = 50;
    var weapon = new Weapon();
    var hp = random(MIN_HP, MAX_HP);
    var receivedDamage = 0;

    this.name = name;
    this.alive = true;

    this.attack = function () {
        weapon.attack(this.battleGround.selectRandomActiveRobot(this), this);
    };

    this.receiveDamage = function (damageAmount) {
        receivedDamage += damageAmount;
        if (receivedDamage >= hp) {
            this.battleGround.killRobot(this);
        }
    };
}

//	описание поля битвы
function BattleGround () {
        var activeRobots = [];
        var graveYard = [];
        var minAmountOfRobotsToStartBattle = random(2, BattleGround.maxAmountOfRobots);
        console.log('Creating battle... This battle needs ' + minAmountOfRobotsToStartBattle + ' robots to start');

        var self = this;

        //	добавление робота на поле; битва начнется при достижении необходимого числа роботов (см. строку 57)
        this.addRobot = function (robot) {
            var amountOfRobots = activeRobots.length;
            if (amountOfRobots >= BattleGround.maxAmountOfRobots) {
                console.warn('Please wait till battle is over');
                return false;
            }
            activeRobots.push(robot);
            robot.battleGround = this;
            if (++amountOfRobots === minAmountOfRobotsToStartBattle) {
                this.started = true;
                setRandomDamage();
            }
            return true;
        };

        //	уничтожение робота и проверка количества оставшихся на поле роботов
        this.killRobot = function (robot) {
            console.log(robot.name + ' was destroyed.');
            robot.alive = false;
            graveYard.push(robot);
            activeRobots.splice(activeRobots.indexOf(robot), 1);
            //if we have a winner (or everybody died)
            if (activeRobots.length <= 1) {
                this.completed = true;
                console.log('Battle completed, the winner is: ', activeRobots[0]);
            }
        };

        //	выбор случайного робота (для малого количества)
        this.selectRandomActiveRobot = function (exclude) {
            var robotsToSelectFrom = activeRobots;
            if (exclude) {
                robotsToSelectFrom = [];
                activeRobots.forEach(function (robot) {
                    if (robot !== exclude) {
                        robotsToSelectFrom.push(robot);
                    }
                });
            }
            return robotsToSelectFrom[random(0, robotsToSelectFrom.length - 1)];
        };

        //	выбор случайного робота (для большого количества)
        //	this.selectRandomActiveRobot2 = function (exclude) {
        //		var selected = activeRobots[random(0, activeRobots.length - 1)];
        //		if (selected === exclude) {
        //			return self.selectRandomActiveRobot2(exclude);
        //		}
        //		return selected;
        //	};

        //	получение урона от оружия массового поражения
        this.damageAll = function (damage, agressor) {
            activeRobots.forEach(function (robot) {
                if (robot !== agressor) {
                    robot.receiveDamage(damage);
                }
            });
        };

        function setRandomDamage () {
            self.selectRandomActiveRobot().attack();
            //if the battle is still active, make further damage
            if (!self.completed) {
                setTimeout(setRandomDamage, 1000);
            }
        }
    }

    BattleGround.maxAmountOfRobots = 20;

    var battle = new BattleGround();
    for (var i = 0; !battle.started; i++) {
        battle.addRobot(new Robot('robot' + i));
    }