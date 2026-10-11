scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprites.destroy(projectile2)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 0, 50)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(assets.image`fighter jet`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
projectile2 = sprites.createProjectileFromSide(assets.image`minion`, 50, 50)
controller.moveSprite(mySprite2)
projectile2.y = 125
projectile2.x = 50
forever(function () {
    projectile2.setFlag(SpriteFlag.AutoDestroy, true)
    projectile2.setVelocity(0, -50)
})
