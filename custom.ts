
enum selectblocks {
    //% blockIdentity="selectblocks.block" enumval=22 block="ラピスラズリブロック"
    //% jres alias=LAPIS_LAZULI_BLOCK
    LapisLazuliBlock = 22,
    //% blockIdentity="selectblocks.block" enumval=41 block="金のブロック"
    //% jres alias=GOLD_BLOCK
    GoldBlock = 41,
    //% blockIdentity="selectblocks.block" enumval=42 block="鉄のブロック"
    //% jres alias=IRON_BLOCK
    IronBlock = 42,
    //% blockIdentity="selectblocks.block" enumval=57 block="ダイヤモンドブロック"
    //% jres alias=DIAMOND_BLOCK
    DiamondBlock = 57,
    //% blockIdentity="selectblocks.block" enumval=133 block="エメラルドブロック"
    //% jres alias=EMERALD_BLOCK
    EmeraldBlock = 133,
    //% blockIdentity="selectblocks.block" enumval=45 block="レンガブロック"
    //% jres alias=BRICKS
    Bricks = 45,
    //% blockIdentity="selectblocks.block" enumval=46 block="TNT"
    //% jres alias=TNT
    TNT = 46,
    //% blockIdentity="selectblocks.block" enumval=925 block="サクラの板材"
    //% jres alias=CHERRY_PLANKS
    CherryPlanks = 925,
    //% blockIdentity="selectblocks.block" enumval=86 block="カボチャ"
    //% jres alias=PUMPKIN
    Pumpkin = 86,
    //% blockIdentity="selectblocks.block" enumval=20 block="ガラス"
    //% jres alias=GLASS
    Glass = 20,
    //% blockIdentity="selectblocks.block" enumval=0 block="空気"
    //% jres alias=AIR
    Air = 0
}

//% weight=999 color=#c71585 icon="\uf1b3"
//% block="体験（たいけん）"
namespace lesson0 {

    //% weight=90
    //% blockId=customPlace
    //% block="$block を $pos におく"
    //% block.shadow=customBlock
    //% pos.shadow="positionXY"
    //% topblock topblockWeight=85
    //% shim=blocks::placeAsync promise
    export function customPlace(block: number, pos: Position): void {
        blocks.place(block, pos);
    }

    //% weight=89
    //% blockId=customBlock
    //% block="$block"
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340
    //% block.fieldOptions.columns=8
    //% block.fieldOptions.tooltips=true
    //% block.fieldOptions.tooltipsXOffset="20"
    //% block.fieldOptions.tooltipsYOffset="-20"
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    //% block.fieldOptions.hideRect=true
    export function customBlock(block: selectblocks): number {
        return block;
    }

    //% weight=88
    //% blockId=positionXY
    //% block="よこ：$x たて：$y"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    export function positionXY(x: number, y: number): Position {
        return world(x, y, 0);
    }

    //% weight=87
    //% blockId=customSpawn
    //% block="$mobをプレイヤーの位置(いち)にスポーンさせる"
    //% mob.shadow=minecraftAnimal
    //% mob.defl=CHICKEN
    //% shim=mobs::spawnAsync promise
    export function customSpawn(mob: number): void{
        mobs.spawn(mob, pos(0, 0, 0));
    }

    //% weight=86
    //% blockId=customRepeat
    //% block="くりかえし$repeat回（かい）"
    //% handlerStatement
    //% repeat.defl=1
    export function customRepeat(repeat: number, handler: () => void) {
        for (let index = 0; index < repeat; index++) {
	        handler();
        }
    }

    //% weight=85
    //% blockId=teleportToNext1
    //% block="次（つぎ）の地点（ちてん）へテレポート"
    export function teleportToNext1() {
        /*player.teleport(world(-21, 0, 0));*/
	player.execute("tp @s -21 0 0 -90 0");
    }

}


