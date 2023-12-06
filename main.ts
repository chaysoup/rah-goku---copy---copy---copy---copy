controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ourple_boy_up`)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . a a a a a a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . a a a a a a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a a a . . . . 
        . . . . a a a . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . a a a a a a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . a a a a a a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a . . . . . . 
        . . . . . . . . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . a a a a a a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a . . . . . . 
        . . . . . . . . . a a a . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`ourple_boy_down`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a f a f a a c . . . . 
        . . . . . 3 a a a 3 a c . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . . . a a c . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a a 5 a a a c . . . . 
        . . . a a a 5 5 a a a a a c . . 
        . . . a c a a a a a a c a c . . 
        . . . a c a a a a a a c a c . . 
        . . . . . a a a a a a c . . . . 
        . . . . . a a a a a a c . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . a a a c . a a a c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a f a f a a c . . . . 
        . . . . . 3 a a a 3 a c . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . . . a a c . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a a 5 a a a c . . . . 
        . . . a a a 5 5 a a a a a c . . 
        . . . a c a a a a a a c a c . . 
        . . . a c a a a a a a c a c . . 
        . . . . . a a a a a a c . . . . 
        . . . . . a a a a a a c . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . . . a c . a a a c . . . 
        . . . . a a a c . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a f a f a a c . . . . 
        . . . . . 3 a a a 3 a c . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . . . a a c . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a a 5 a a a c . . . . 
        . . . a a a 5 5 a a a a a c . . 
        . . . a c a a a a a a c a c . . 
        . . . a c a a a a a a c a c . . 
        . . . . . a a a a a a c . . . . 
        . . . . . a a a a a a c . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . a a a c . a a a c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a f a f a a c . . . . 
        . . . . . 3 a a a 3 a c . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . . . a a c . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a a 5 a a a c . . . . 
        . . . a a a 5 5 a a a a a c . . 
        . . . a c a a a a a a c a c . . 
        . . . a c a a a a a a c a c . . 
        . . . . . a a a a a a c . . . . 
        . . . . . a a a a a a c . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . a a a c . a c . . . . . 
        . . . . . . . . . a a a c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a f a f a a c . . . . 
        . . . . . 3 a a a 3 a c . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . . . a a c . . . . . . 
        . . . . . . a a a a c . . . . . 
        . . . . . a a 5 a a a c . . . . 
        . . . a a a 5 5 a a a a a c . . 
        . . . a c a a a a a a c a c . . 
        . . . a c a a a a a a c a c . . 
        . . . . . a a a a a a c . . . . 
        . . . . . a a a a a a c . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . . . a c . a c . . . . . 
        . . . . a a a c . a a a c . . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`ourple_boy_right`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`ourple_boy_left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a f a f a . . . . . 
        . . . . c a 3 a a a 3 . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . . c a a . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a a 5 a a . . . . . 
        . . c a a a a a 5 5 a a a . . . 
        . . c a c a a a a a a c a . . . 
        . . c a c a a a a a a c a . . . 
        . . . . c a a a a a a . . . . . 
        . . . . c a a a a a a . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . c a a a . c a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a f a f a . . . . . 
        . . . . c a 3 a a a 3 . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . . c a a . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a a 5 a a . . . . . 
        . . c a a a a a 5 5 a a a . . . 
        . . c a c a a a a a a c a . . . 
        . . c a c a a a a a a c a . . . 
        . . . . c a a a a a a . . . . . 
        . . . . c a a a a a a . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . c a a a . c a . . . . . . 
        . . . . . . . . c a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a f a f a . . . . . 
        . . . . c a 3 a a a 3 . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . . c a a . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a a 5 a a . . . . . 
        . . c a a a a a 5 5 a a a . . . 
        . . c a c a a a a a a c a . . . 
        . . c a c a a a a a a c a . . . 
        . . . . c a a a a a a . . . . . 
        . . . . c a a a a a a . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . c a a a . c a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a f a f a . . . . . 
        . . . . c a 3 a a a 3 . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . . c a a . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a a 5 a a . . . . . 
        . . c a a a a a 5 5 a a a . . . 
        . . c a c a a a a a a c a . . . 
        . . c a c a a a a a a c a . . . 
        . . . . c a a a a a a . . . . . 
        . . . . c a a a a a a . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . . . c a . c a a a . . . . 
        . . . c a a a . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a f a f a . . . . . 
        . . . . c a 3 a a a 3 . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . . c a a . . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . c a a a 5 a a . . . . . 
        . . c a a a a a 5 5 a a a . . . 
        . . c a c a a a a a a c a . . . 
        . . c a c a a a a a a c a . . . 
        . . . . c a a a a a a . . . . . 
        . . . . c a a a a a a . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . . . c a . c a . . . . . . 
        . . . c a a a . c a a a . . . . 
        `],
    200,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`ourple_boy_up`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a . . . . . . 
        . . . . . . . . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a a a . . . . 
        . . . . a a a . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a . . . . . . 
        . . . . . . . . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a a a . . . . 
        . . . . a a a . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a f a f a a . . . . . 
        . . . . . 3 a a a 3 a . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a . . . . . . 
        . . . . . . . . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . a a a . . a a a . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a f a f a . . . . . 
        . . . . . a 3 a a a 3 . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a 5 a a a . . . . . 
        . . . a a a 5 5 a a a a a . . . 
        . . . a . a a a a a a . a . . . 
        . . . a . a a a a a a . a . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . . . a . . a . . . . . . 
        . . . . . . a . . a a a . . . . 
        . . . . a a a . . . . . . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 5000)
    mySprite.setImage(img`
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `)
    sprites.destroy(mySprite)
    game.gameOver(false)
})
let leave = 0
let mySprite: Sprite = null
music.play(music.createSong(hex`00f4010408030109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80090000000010001090400050001090800090001090c000d0001091000110001091400150001091800190001091c001d0001092000210001092400250001092800290001092c002d0001093000310001093400350001093800390001093c003d0001094000410001094400450001094800490001094c004d0001095000510001095400550001095800590001095c005d00010a`), music.PlaybackMode.UntilDone)
game.splash("Today's the day.")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`ourple_boy_sit`, SpriteKind.Player)
let otherSprite = sprites.create(img`
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 f 2 f 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 . 2 2 2 2 2 2 . 2 . . . 
    . . . 2 . 2 2 2 2 2 2 . 2 . . . 
    . . . f . e e e e e e . . . . . 
    . . f . . e e e e e e . . . . . 
    . . . f . e e . . e e . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . 2 2 2 . . 2 2 2 . . . . 
    `, SpriteKind.Enemy)
otherSprite.setPosition(40, 50)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
let name = game.askForString("what is your " + "name?", 12)
let age = game.askForNumber("what is your " + "age?", 2)
let gender = game.askForString("are you male" + "?", 3)
if (gender == "no") {
	
}
if (age < 18) {
    game.splash("you shouldn't be here.")
    otherSprite.follow(mySprite)
    otherSprite.sayText("leave please.")
}
if (age >= 18) {
    game.splash("you should leave.")
    leave = 0
}
