// deno-lint-ignore-file no-explicit-any

declare namespace Android {
    /**
     * 提供对安卓设备的输入输出操作。
     *
     * @module
     */
    namespace io {
        /**
         * 提供在应用的日志屏幕输出日志。
         *
         * @module
         */
        namespace log {
            /** 输出级别为 `VERBOSE` 的日志。 */
            function verbose(...args: any[]): void;

            /** 输出级别为 `DEBUG` 的日志。 */
            function debug(...args: any[]): void;

            /** 输出级别为 `INFO` 的日志。 */
            function info(...args: any[]): void;

            /** 输出级别为 `WARN` 的日志。 */
            function warn(...args: any[]): void;

            /** 输出级别为 `ERROR` 的日志。 */
            function error(...args: any[]): void;

            /** 输出级别为 `ASSERT` 的日志。 */
            function assert(...args: any[]): void;

            /** 同 `verbose` */
            function v(...args: any[]): void;

            /** 同 `debug` */
            function d(...args: any[]): void;

            /** 同 `info` */
            function i(...args: any[]): void;

            /** 同 `warn` */
            function w(...args: any[]): void;

            /** 同 `error` */
            function e(...args: any[]): void;

            /** 同 `assert` */
            function a(...args: any[]): void;
        }

        /** 在屏幕输出 Toast 信息。 */
        function toast(...args: any[]): void;

        function notification(title: string, message: string): void;
        function notification(title: string, message: string, options: NotificationOptions): void;

        function inputTextPrivilege(text: string): Promise<void>;

        function inputTextRoot(text: string): Promise<void>;

        function inputTextShizuku(text: string): Promise<void>;

        function inputKeyEventPrivilege(key: string): Promise<void>;

        function inputKeyEventRoot(key: string): Promise<void>;

        function inputKeyEventShizuku(key: string): Promise<void>;
    }

    namespace app {
        function toPackageName(appName: string): string;

        function toAppName(packageName: string): string;

        function launchPackage(packageName: string): void;

        function launchApp(appName: string): void;

        function stopPackage(packageName: string): void;

        function stopApp(appName: string): void;

        function installPackage(path: string): void;

        function uninstallPackage(packageName: string): void;

        function uninstallApp(appName: string): void;

        function getCurrentPackage(): string;

        function getCurrentApp(): string;

        function getRunningPackages(): string[];

        function getRunningApps(): string[];

        function getDenofaVersion(): string;

        function getDenofaCoreVersion(): string;

        function getInternalStoragePath(): string;

        function getExternalStoragePath(): string;
    }

    namespace device {
        function getWidth(): number;

        function getHeight(): number;

        function getDensity(): number;

        function getOrientation(): number;

        function getBrightness(): number;

        function setBrightness(value: number): void;

        function getBrightnessMode(): number;

        function setBrightnessMode(value: number): void;

        function getMusicVolume(): number;

        function setMusicVolume(value: number): void;

        function getMusicMaxVolume(): number;

        function getMusicMinVolume(): number;

        function getNotificationVolume(): number;

        function setNotificationVolume(value: number): void;

        function getNotificationMaxVolume(): number;

        function getNotificationMinVolume(): number;

        function getAlarmVolume(): number;

        function setAlarmVolume(value: number): void;

        function getAlarmMaxVolume(): number;

        function getAlarmMinVolume(): number;

        function getBattery(): number;

        function getIsCharging(): boolean;

        function getTotalMem(): number;

        function getAvailMem(): number;

        function getIsLowMemory(): boolean;

        function getIsScreenOn(): boolean;

        function acquireScreenBright(): void;
        function acquireScreenBright(timeout: number): void;

        function acquireScreenDim(): void;
        function acquireScreenDim(timeout: number): void;

        function releaseScreen(): void;

        function vibrate(timeout: number): void;

        function cancelVibrate(): void;

        function getBuildId(): string;

        function getBuildDisplay(): string;

        function getBuildProduct(): string;

        function getBuildDevice(): string;

        function getBuildBoard(): string;

        function getBuildManufacturer(): string;

        function getBuildBrand(): string;

        function getBuildModel(): string;

        function getBuildSocManufacturer(): string;

        function getBuildSocModel(): string;

        function getBuildBootloader(): string;

        function getBuildRadio(): string;

        function getBuildHardware(): string;

        function getBuildSku(): string;

        function getBuildOdmSku(): string;

        function getBuildSerial(): string;

        function getBuildSupportedAbis(): string[];

        function getBuildSupported32BitAbis(): string[];

        function getBuildSupported64BitAbis(): string[];

        function getBuildType(): string;

        function getBuildTags(): string;

        function getBuildFingerprint(): string;

        function getBuildTime(): string;

        function getBuildUser(): string;

        function getBuildHost(): string;

        function getBuildSdkInt(): number;

        function getBuildIncremental(): string;

        function getBuildRelease(): string;

        function getBuildBaseOs(): string;

        function getBuildSecurityPatch(): string;

        function getBuildCodename(): string;

        function getImei(): string;

        function getAndroidId(): string;

        function getIpAddress(): string;

        function getMacAddress(): string;

        function getBluetoothAddress(): string;

        function getIsKeyguardSecure(): boolean;

        function getIsKeyguardLocked(): boolean;

        function getIsDeviceSecure(): boolean;

        function getIsDeviceLocked(): boolean;
    }

    namespace shell {
        function execSh(cmd: string): Promise<ShellResult>;

        function execShSync(cmd: string): ShellResult;

        function execSu(cmd: string): Promise<ShellResult>;

        function execSuSync(cmd: string): ShellResult;

        function execLibsu(cmd: string): Promise<ShellResult>;

        function execLibsuSync(cmd: string): ShellResult;

        function execShizuku(cmd: string): Promise<ShellResult>;

        function execShizukuSync(cmd: string): ShellResult;
    }

    namespace sys {
        function delay(duration: number): Promise<void>;

        function sleep(duration: number): void;
    }

    namespace project {
        function run(projectName: string): Promise<void>;

        function stop(): Promise<void>;
        function stop(projectName: string): Promise<void>;

        function stopAll(): Promise<void>;

        function load(): Promise<void>;

        function list(): string[];

        function listRunning(): string[];

        function create(repository: string): Promise<void>;

        function destroy(projectName: string): Promise<void>;

        function gitPull(repository: string): Promise<void>;

        function getInfo(): ProjectInfo;
        function getInfo(projectName: string): ProjectInfo;
    }

    namespace img {
        function getImage(): Promise<Image>;

        function refresh(): Promise<void>;

        function lock(): void;

        function unlock(): void;

        function compareColor(xyc: PointData): Promise<boolean>;
        function compareColor(point: Point): Promise<boolean>;
        function compareColor(point: PointConstructorOptions): Promise<boolean>;
        function compareColor(xyc: PointData, options: CompareColorOptions): Promise<boolean>;
        function compareColor(point: Point, options: CompareColorOptions): Promise<boolean>;
        function compareColor(point: PointConstructorOptions, options: CompareColorOptions): Promise<boolean>;
        function compareColor(xyc: PointData, options: CompareColorOptionsConstructorOptions): Promise<boolean>;
        function compareColor(point: Point, options: CompareColorOptionsConstructorOptions): Promise<boolean>;
        function compareColor(
            point: PointConstructorOptions,
            options: CompareColorOptionsConstructorOptions,
        ): Promise<boolean>;

        function compareColors(xycs: PointData[]): Promise<boolean>;
        function compareColors(points: Point[]): Promise<boolean>;
        function compareColors(points: PointConstructorOptions[]): Promise<boolean>;
        function compareColors(xycs: PointData[], options: CompareColorOptions): Promise<boolean>;
        function compareColors(points: Point[], options: CompareColorOptions): Promise<boolean>;
        function compareColors(points: PointConstructorOptions[], options: CompareColorOptions): Promise<boolean>;
        function compareColors(xycs: PointData[], options: CompareColorOptionsConstructorOptions): Promise<boolean>;
        function compareColors(points: Point[], options: CompareColorOptionsConstructorOptions): Promise<boolean>;
        function compareColors(
            points: PointConstructorOptions[],
            options: CompareColorOptionsConstructorOptions,
        ): Promise<boolean>;

        function findColor(xyc: PointData): Promise<Point>;
        function findColor(point: Point): Promise<Point>;
        function findColor(point: PointConstructorOptions): Promise<Point>;
        function findColor(xyc: PointData, options: FindColorOptions): Promise<Point>;
        function findColor(point: Point, options: FindColorOptions): Promise<Point>;
        function findColor(point: PointConstructorOptions, options: FindColorOptions): Promise<Point>;
        function findColor(xyc: PointData, options: FindColorOptionsConstructorOptions): Promise<Point>;
        function findColor(point: Point, options: FindColorOptionsConstructorOptions): Promise<Point>;
        function findColor(point: PointConstructorOptions, options: FindColorOptionsConstructorOptions): Promise<Point>;

        function findColors(xyc: PointData): Promise<Point[]>;
        function findColors(point: Point): Promise<Point[]>;
        function findColors(point: PointConstructorOptions): Promise<Point[]>;
        function findColors(xyc: PointData, options: FindColorOptions): Promise<Point[]>;
        function findColors(point: Point, options: FindColorOptions): Promise<Point[]>;
        function findColors(point: PointConstructorOptions, options: FindColorOptions): Promise<Point[]>;
        function findColors(xyc: PointData, options: FindColorOptionsConstructorOptions): Promise<Point[]>;
        function findColors(point: Point, options: FindColorOptionsConstructorOptions): Promise<Point[]>;
        function findColors(
            point: PointConstructorOptions,
            options: FindColorOptionsConstructorOptions,
        ): Promise<Point[]>;

        function findMultiColor(xycs: PointData[]): Promise<Point>;
        function findMultiColor(points: Point[]): Promise<Point>;
        function findMultiColor(points: PointConstructorOptions[]): Promise<Point>;
        function findMultiColor(xycs: PointData[], options: FindColorOptions): Promise<Point>;
        function findMultiColor(points: Point[], options: FindColorOptions): Promise<Point>;
        function findMultiColor(points: PointConstructorOptions[], options: FindColorOptions): Promise<Point>;
        function findMultiColor(xycs: PointData[], options: FindColorOptionsConstructorOptions): Promise<Point>;
        function findMultiColor(points: Point[], options: FindColorOptionsConstructorOptions): Promise<Point>;
        function findMultiColor(
            points: PointConstructorOptions[],
            options: FindColorOptionsConstructorOptions,
        ): Promise<Point>;

        function findMultiColors(xycs: PointData[]): Promise<Point[]>;
        function findMultiColors(points: Point[]): Promise<Point[]>;
        function findMultiColors(points: PointConstructorOptions[]): Promise<Point[]>;
        function findMultiColors(xycs: PointData[], options: FindColorOptions): Promise<Point[]>;
        function findMultiColors(points: Point[], options: FindColorOptions): Promise<Point[]>;
        function findMultiColors(points: PointConstructorOptions[], options: FindColorOptions): Promise<Point[]>;
        function findMultiColors(xycs: PointData[], options: FindColorOptionsConstructorOptions): Promise<Point[]>;
        function findMultiColors(points: Point[], options: FindColorOptionsConstructorOptions): Promise<Point[]>;
        function findMultiColors(
            points: PointConstructorOptions[],
            options: FindColorOptionsConstructorOptions,
        ): Promise<Point[]>;

        function saveImage(): Promise<string>;
        function saveImage(options: SaveImageOptions): Promise<string>;
        function saveImage(options: SaveImageOptionsConstructorOptions): Promise<string>;
    }

    namespace finger {
        function homeAccessibility(): void;

        function backAccessibility(): void;

        function recentsAccessibility(): void;

        function notificationsAccessibility(): void;

        function lockScreenAccessibility(): void;

        function powerDialogAccessibility(): void;

        function quickSettingsAccessibility(): void;

        function takeScreenshotAccessibility(): void;

        function toggleSplitScreenAccessibility(): void;

        function tapAccessibility(point: Point): Promise<void>;
        function tapAccessibility(point: PointConstructorOptions): Promise<void>;
        function tapAccessibility(x: number, y: number): Promise<void>;

        function swipeAccessibility(pointFrom: Point, pointTo: Point): Promise<void>;
        function swipeAccessibility(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function swipeAccessibility(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
        ): Promise<void>;
        function swipeAccessibility(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function swipeAccessibility(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function swipeAccessibility(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function dragAndDropAccessibility(pointFrom: Point, pointTo: Point): Promise<void>;
        function dragAndDropAccessibility(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function dragAndDropAccessibility(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
        ): Promise<void>;
        function dragAndDropAccessibility(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function dragAndDropAccessibility(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function dragAndDropAccessibility(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function tapPrivilege(point: Point): Promise<void>;
        function tapPrivilege(point: PointConstructorOptions): Promise<void>;
        function tapPrivilege(x: number, y: number): Promise<void>;

        function tapRoot(point: Point): Promise<void>;
        function tapRoot(point: PointConstructorOptions): Promise<void>;
        function tapRoot(x: number, y: number): Promise<void>;

        function tapShizuku(point: Point): Promise<void>;
        function tapShizuku(point: PointConstructorOptions): Promise<void>;
        function tapShizuku(x: number, y: number): Promise<void>;

        function swipePrivilege(pointFrom: Point, pointTo: Point): Promise<void>;
        function swipePrivilege(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function swipePrivilege(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions): Promise<void>;
        function swipePrivilege(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function swipePrivilege(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function swipePrivilege(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function swipeRoot(pointFrom: Point, pointTo: Point): Promise<void>;
        function swipeRoot(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function swipeRoot(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions): Promise<void>;
        function swipeRoot(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function swipeRoot(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function swipeRoot(xFrom: number, yFrom: number, xTo: number, yTo: number, duration: number): Promise<void>;

        function swipeShizuku(pointFrom: Point, pointTo: Point): Promise<void>;
        function swipeShizuku(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function swipeShizuku(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions): Promise<void>;
        function swipeShizuku(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function swipeShizuku(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function swipeShizuku(xFrom: number, yFrom: number, xTo: number, yTo: number, duration: number): Promise<void>;

        function dragAndDropPrivilege(pointFrom: Point, pointTo: Point): Promise<void>;
        function dragAndDropPrivilege(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function dragAndDropPrivilege(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
        ): Promise<void>;
        function dragAndDropPrivilege(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function dragAndDropPrivilege(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function dragAndDropPrivilege(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function dragAndDropRoot(pointFrom: Point, pointTo: Point): Promise<void>;
        function dragAndDropRoot(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function dragAndDropRoot(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions): Promise<void>;
        function dragAndDropRoot(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function dragAndDropRoot(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function dragAndDropRoot(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function dragAndDropShizuku(pointFrom: Point, pointTo: Point): Promise<void>;
        function dragAndDropShizuku(pointFrom: Point, pointTo: Point, duration: number): Promise<void>;
        function dragAndDropShizuku(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
        ): Promise<void>;
        function dragAndDropShizuku(
            pointFrom: PointConstructorOptions,
            pointTo: PointConstructorOptions,
            duration: number,
        ): Promise<void>;
        function dragAndDropShizuku(xFrom: number, yFrom: number, xTo: number, yTo: number): Promise<void>;
        function dragAndDropShizuku(
            xFrom: number,
            yFrom: number,
            xTo: number,
            yTo: number,
            duration: number,
        ): Promise<void>;

        function downPrivilege(point: Point): Promise<void>;
        function downPrivilege(point: PointConstructorOptions): Promise<void>;
        function downPrivilege(x: number, y: number): Promise<void>;

        function downRoot(point: Point): Promise<void>;
        function downRoot(point: PointConstructorOptions): Promise<void>;
        function downRoot(x: number, y: number): Promise<void>;

        function downShizuku(point: Point): Promise<void>;
        function downShizuku(point: PointConstructorOptions): Promise<void>;
        function downShizuku(x: number, y: number): Promise<void>;

        function movePrivilege(point: Point): Promise<void>;
        function movePrivilege(point: PointConstructorOptions): Promise<void>;
        function movePrivilege(x: number, y: number): Promise<void>;

        function moveRoot(point: Point): Promise<void>;
        function moveRoot(point: PointConstructorOptions): Promise<void>;
        function moveRoot(x: number, y: number): Promise<void>;

        function moveShizuku(point: Point): Promise<void>;
        function moveShizuku(point: PointConstructorOptions): Promise<void>;
        function moveShizuku(x: number, y: number): Promise<void>;

        function upPrivilege(point: Point): Promise<void>;
        function upPrivilege(point: PointConstructorOptions): Promise<void>;
        function upPrivilege(x: number, y: number): Promise<void>;

        function upRoot(point: Point): Promise<void>;
        function upRoot(point: PointConstructorOptions): Promise<void>;
        function upRoot(x: number, y: number): Promise<void>;

        function upShizuku(point: Point): Promise<void>;
        function upShizuku(point: PointConstructorOptions): Promise<void>;
        function upShizuku(x: number, y: number): Promise<void>;

        function multiDownPrivilege(point: Point): Promise<void>;
        function multiDownPrivilege(point: Point, id: number): Promise<void>;
        function multiDownPrivilege(point: PointConstructorOptions): Promise<void>;
        function multiDownPrivilege(point: PointConstructorOptions, id: number): Promise<void>;
        function multiDownPrivilege(x: number, y: number): Promise<void>;
        function multiDownPrivilege(x: number, y: number, id: number): Promise<void>;

        function multiDownRoot(point: Point): Promise<void>;
        function multiDownRoot(point: Point, id: number): Promise<void>;
        function multiDownRoot(point: PointConstructorOptions): Promise<void>;
        function multiDownRoot(point: PointConstructorOptions, id: number): Promise<void>;
        function multiDownRoot(x: number, y: number): Promise<void>;
        function multiDownRoot(x: number, y: number, id: number): Promise<void>;

        function multiDownShizuku(point: Point): Promise<void>;
        function multiDownShizuku(point: Point, id: number): Promise<void>;
        function multiDownShizuku(point: PointConstructorOptions): Promise<void>;
        function multiDownShizuku(point: PointConstructorOptions, id: number): Promise<void>;
        function multiDownShizuku(x: number, y: number): Promise<void>;
        function multiDownShizuku(x: number, y: number, id: number): Promise<void>;

        function multiMovePrivilege(point: Point): Promise<void>;
        function multiMovePrivilege(point: Point, id: number): Promise<void>;
        function multiMovePrivilege(point: PointConstructorOptions): Promise<void>;
        function multiMovePrivilege(point: PointConstructorOptions, id: number): Promise<void>;
        function multiMovePrivilege(x: number, y: number): Promise<void>;
        function multiMovePrivilege(x: number, y: number, id: number): Promise<void>;

        function multiMoveRoot(point: Point): Promise<void>;
        function multiMoveRoot(point: Point, id: number): Promise<void>;
        function multiMoveRoot(point: PointConstructorOptions): Promise<void>;
        function multiMoveRoot(point: PointConstructorOptions, id: number): Promise<void>;
        function multiMoveRoot(x: number, y: number): Promise<void>;
        function multiMoveRoot(x: number, y: number, id: number): Promise<void>;

        function multiMoveShizuku(point: Point): Promise<void>;
        function multiMoveShizuku(point: Point, id: number): Promise<void>;
        function multiMoveShizuku(point: PointConstructorOptions): Promise<void>;
        function multiMoveShizuku(point: PointConstructorOptions, id: number): Promise<void>;
        function multiMoveShizuku(x: number, y: number): Promise<void>;
        function multiMoveShizuku(x: number, y: number, id: number): Promise<void>;

        function multiUpPrivilege(): Promise<void>;
        function multiUpPrivilege(id: number): Promise<void>;

        function multiUpRoot(): Promise<void>;
        function multiUpRoot(id: number): Promise<void>;

        function multiUpShizuku(): Promise<void>;
        function multiUpShizuku(id: number): Promise<void>;
    }

    interface PointConstructorOptions {
        readonly x?: number;

        readonly y?: number;

        readonly c?: number;
    }

    type PointData = [number, number, number];

    /** 点类 */
    class Point {
        static readonly defaultOptions: {
            readonly x: number;

            readonly y: number;

            readonly c: number;
        };

        static isPointData(value: any): boolean;

        readonly x: number;

        readonly y: number;

        readonly c: number;

        constructor();
        constructor(xyc: PointData);
        constructor(options: PointConstructorOptions);
        constructor(x: number | null, y: number | null, c: number | null);
    }

    interface RectConstructorOptions {
        readonly left?: number;

        readonly top?: number;

        readonly right?: number;

        readonly bottom?: number;
    }

    type RectData = [number, number, number, number];

    /** 矩形类 */
    class Rect {
        static readonly defaultOptions: {
            readonly left: number;

            readonly top: number;

            readonly right: number;

            readonly bottom: number;
        };

        static isRectData(value: any): boolean;

        readonly left: number;

        readonly top: number;

        readonly right: number;

        readonly bottom: number;

        constructor();
        constructor(ltrb: RectData);
        constructor(options: RectConstructorOptions);
        constructor(left: number | null, top: number | null, right: number | null, bottom: number | null);
    }

    interface NotificationOptions {
        smallIcon: string | null;
        largeIcon: string | null;
    }

    interface ShellResultConstructorOptions {
        readonly code?: number;

        readonly out?: string[];

        readonly err?: string[];

        readonly isSuccess?: boolean;
    }

    class ShellResult {
        static readonly defaultOptions: {
            readonly code: number;

            readonly out: string[];

            readonly err: string[];

            readonly isSuccess: boolean;
        };

        readonly code: number;

        readonly out: string[];

        readonly err: string[];

        readonly isSuccess: boolean;

        constructor();
        constructor(options: ShellResultConstructorOptions);
    }

    class Floater {
        static builder(): FloaterBuilder;

        static builder(id: string): FloaterBuilder;

        readonly id: string;

        private constructor();

        show(): Promise<Floater>;

        updatePosition(x: number, y: number): Floater;

        updateSize(width: number, heigth: number): Floater;

        updateBackgroundColor(color: number): Floater;

        updateText(text: string): Floater;

        updateTextColor(color: number): Floater;

        close(): Promise<Floater>;
    }

    class FloaterBuilder {
        private constructor();

        setPosition(x: number, y: number): FloaterBuilder;

        setSize(width: number, heigth: number): FloaterBuilder;

        setBackgroundColor(color: number): FloaterBuilder;

        setText(text: string): FloaterBuilder;

        setTextColor(color: number): FloaterBuilder;

        build(): Floater;
    }

    class QuickUi {
        static builder(): QuickUiBuilder;

        static builder(id: string): QuickUiBuilder;

        readonly id: string;

        private constructor();

        show(): Promise<QuickUi>;

        getResult(): QuickUiResult;

        getLastResult(): Promise<QuickUiResult>;

        waitForResult(): Promise<QuickUiResult>;
    }

    class QuickUiBuilder {
        private constructor();

        setTitle(content: string): QuickUiBuilder;

        setOkText(content: string): QuickUiBuilder;

        setCancelText(content: string): QuickUiBuilder;

        setCountDownTime(s: number): QuickUiBuilder;

        addSelect(id: string): QuickUiBuilder;
        addSelect(id: string, options: QuickUiSelectOptions): QuickUiBuilder;
        addSelect(id: string, options: QuickUiSelectOptionsConstructorOptions): QuickUiBuilder;
        addSelect(
            id: string,
            label: string | null,
            options: string[] | null,
            displayOptions: string[] | null,
            defaultValue: string | null,
        ): QuickUiBuilder;

        addSwitch(id: string): QuickUiBuilder;
        addSwitch(id: string, options: QuickUiSwitchOptions): QuickUiBuilder;
        addSwitch(id: string, options: QuickUiSwitchOptionsConstructorOptions): QuickUiBuilder;
        addSwitch(id: string, label: string | null, defaultValue: string | null): QuickUiBuilder;

        addCheckbox(id: string): QuickUiBuilder;
        addCheckbox(id: string, options: QuickUiCheckboxOptions): QuickUiBuilder;
        addCheckbox(id: string, options: QuickUiCheckboxOptionsConstructorOptions): QuickUiBuilder;
        addCheckbox(
            id: string,
            label: string | null,
            options: string[] | null,
            displayOptions: string[] | null,
            defaultValue: string[] | null,
        ): QuickUiBuilder;

        addInput(id: string): QuickUiBuilder;
        addInput(id: string, options: QuickUiInputOptions): QuickUiBuilder;
        addInput(id: string, options: QuickUiInputOptionsConstructorOptions): QuickUiBuilder;
        addInput(id: string, label: string | null, defaultValue: string | null): QuickUiBuilder;

        addText(id: string): QuickUiBuilder;
        addText(id: string, options: QuickUiTextOptions): QuickUiBuilder;
        addText(id: string, options: QuickUiTextOptionsConstructorOptions): QuickUiBuilder;
        addText(id: string, value: string | null, fontSize: number | null, color: number | null): QuickUiBuilder;

        build(): QuickUi;
    }

    type QuickUiResultCategory = 'Ok' | 'Cancel' | 'Last' | 'Empty';

    type QuickUiResultValueCategory = string | boolean | string[];

    class QuickUiResult {
        readonly category: QuickUiResultCategory;

        readonly result: Map<string, QuickUiResultValueCategory>;
    }

    interface QuickUiSelectOptionsConstructorOptions {
        readonly label?: string;

        readonly options?: string[];

        readonly displayOptions?: string[];

        readonly defaultValue?: string;
    }

    class QuickUiSelectOptions {
        static readonly defaultOptions: {
            readonly label: string;

            readonly options: string[];

            readonly displayOptions: string[];

            readonly defaultValue: string;
        };

        readonly label: string;

        readonly options: string[];

        readonly displayOptions: string[];

        readonly defaultValue: string;

        constructor();
        constructor(options: QuickUiSelectOptionsConstructorOptions);
        constructor(
            label: string | null,
            options: string[] | null,
            displayOptions: string[] | null,
            defaultValue: string | null,
        );
    }

    interface QuickUiSwitchOptionsConstructorOptions {
        readonly label?: string;

        readonly defaultValue?: string;
    }

    class QuickUiSwitchOptions {
        static readonly defaultOptions: {
            readonly label: string;

            readonly defaultValue: string;
        };

        readonly label: string;

        readonly defaultValue: string;

        constructor();
        constructor(options: QuickUiSwitchOptionsConstructorOptions);
        constructor(label: string | null, defaultValue: string | null);
    }

    interface QuickUiCheckboxOptionsConstructorOptions {
        readonly label?: string;

        readonly options?: string[];

        readonly displayOptions?: string[];

        readonly defaultValue?: string[];
    }

    class QuickUiCheckboxOptions {
        static readonly defaultOptions: {
            readonly label: string;

            readonly options: string[];

            readonly displayOptions: string[];

            readonly defaultValue: string[];
        };

        readonly label: string;

        readonly options: string[];

        readonly displayOptions: string[];

        readonly defaultValue: string[];

        constructor();
        constructor(options: QuickUiCheckboxOptionsConstructorOptions);
        constructor(
            label: string | null,
            options: string[] | null,
            displayOptions: string[] | null,
            defaultValue: string[] | null,
        );
    }

    interface QuickUiInputOptionsConstructorOptions {
        readonly label?: string;

        readonly defaultValue?: string;
    }

    class QuickUiInputOptions {
        static readonly defaultOptions: {
            readonly label: string;

            readonly defaultValue: string;
        };

        readonly label: string;

        readonly defaultValue: string;

        constructor();
        constructor(options: QuickUiInputOptionsConstructorOptions);
        constructor(label: string | null, defaultValue: string | null);
    }

    interface QuickUiTextOptionsConstructorOptions {
        readonly value?: string;

        readonly fontSize?: number;

        readonly color?: number;
    }

    class QuickUiTextOptions {
        static readonly defaultOptions: {
            readonly value: string;

            readonly fontSize: number;

            readonly color: number;
        };

        readonly value: string;

        readonly fontSize: number;

        readonly color: number;

        constructor();
        constructor(options: QuickUiTextOptionsConstructorOptions);
        constructor(value: string | null, fontSize: number | null, color: number | null);
    }

    /** Ui 对象类 */
    class UiObject {
        private constructor();

        getParent(): UiObject | null;

        getChild(i: number): UiObject | null;

        getId(): string;

        getDesc(): string;

        getClassName(): string;

        getPackageName(): string;

        getText(): string;

        getOriginId(): number;

        getDepth(): number;

        getIndexInParent(): number;

        getDrawingOrder(): number;

        getRow(): number;

        getRowSpan(): number;

        getRowCount(): number;

        getColumn(): number;

        getColumnSpan(): number;

        getColumnCount(): number;

        getAccessibilityFocused(): boolean;

        getChecked(): boolean;

        getCheckable(): boolean;

        getClickable(): boolean;

        getContextClickable(): boolean;

        getDismissable(): boolean;

        getEnabled(): boolean;

        getEditable(): boolean;

        getFocusable(): boolean;

        getFocused(): boolean;

        getLongClickable(): boolean;

        getSelected(): boolean;

        getScrollable(): boolean;

        getVisibleToUser(): boolean;

        getPassword(): boolean;

        getContentInvalid(): boolean;

        getMultiLine(): boolean;

        getBoundsInScreen(): Rect;

        getChildCount(): number;

        getChildren(): UiObject[];

        getAllChildren(): UiObject[];

        click(): void;

        longClick(): void;

        accessibilityFocus(): void;

        clearAccessibilityFocus(): void;

        focus(): void;

        clearFocus(): void;

        copy(): void;

        paste(): void;

        select(): void;

        cut(): void;

        collapse(): void;

        expand(): void;

        dismiss(): void;

        showOnScreen(): void;

        scrollForward(): void;

        scrollBackward(): void;

        scrollUp(): void;

        scrollDown(): void;

        scrollLeft(): void;

        scrollRight(): void;

        contextClick(): void;

        setSelection(start: number, end: number): void;

        setText(text: string): void;

        setProgress(value: number): void;

        scrollTo(row: number, column: number): void;
    }

    /** Ui 选择器类 */
    class UiSelector {
        static builder(): UiSelectorBuilder;

        private constructor();

        find(): UiObject[];

        findOne(): UiObject | null;

        untilFind(): Promise<UiObject[]>;
        untilFind(timeout: number): Promise<UiObject[]>;

        untilFindOne(): Promise<UiObject>;
        untilFindOne(timeout: number): Promise<UiObject>;

        exists(): boolean;

        wait(): Promise<void>;
        wait(timeout: number): Promise<void>;
    }

    class UiSelectorBuilder {
        private constructor();

        id(id: string): UiSelectorBuilder;

        idEquals(id: string): UiSelectorBuilder;

        idContains(content: string): UiSelectorBuilder;

        idMatches(regex: string): UiSelectorBuilder;

        idStartsWith(prefix: string): UiSelectorBuilder;

        idEndsWith(suffix: string): UiSelectorBuilder;

        text(text: string): UiSelectorBuilder;

        textEquals(text: string): UiSelectorBuilder;

        textContains(content: string): UiSelectorBuilder;

        textMatches(regex: string): UiSelectorBuilder;

        textStartsWith(prefix: string): UiSelectorBuilder;

        textEndsWith(suffix: string): UiSelectorBuilder;

        desc(desc: string): UiSelectorBuilder;

        descEquals(desc: string): UiSelectorBuilder;

        descContains(content: string): UiSelectorBuilder;

        descMatches(regex: string): UiSelectorBuilder;

        descStartsWith(prefix: string): UiSelectorBuilder;

        descEndsWith(suffix: string): UiSelectorBuilder;

        className(className: string): UiSelectorBuilder;

        classNameEquals(className: string): UiSelectorBuilder;

        classNameContains(content: string): UiSelectorBuilder;

        classNameMatches(regex: string): UiSelectorBuilder;

        classNameStartsWith(prefix: string): UiSelectorBuilder;

        classNameEndsWith(suffix: string): UiSelectorBuilder;

        packageName(packageName: string): UiSelectorBuilder;

        packageNameEquals(packageName: string): UiSelectorBuilder;

        packageNameContains(content: string): UiSelectorBuilder;

        packageNameMatches(regex: string): UiSelectorBuilder;

        packageNameStartsWith(prefix: string): UiSelectorBuilder;

        packageNameEndsWith(suffix: string): UiSelectorBuilder;

        bounds(rect: Rect): UiSelectorBuilder;

        boundsEquals(rect: Rect): UiSelectorBuilder;

        boundsInside(rect: Rect): UiSelectorBuilder;

        boundsContains(rect: Rect): UiSelectorBuilder;

        checkable(): UiSelectorBuilder;
        checkable(value: boolean): UiSelectorBuilder;

        checked(): UiSelectorBuilder;
        checked(value: boolean): UiSelectorBuilder;

        focusable(): UiSelectorBuilder;
        focusable(value: boolean): UiSelectorBuilder;

        focused(): UiSelectorBuilder;
        focused(value: boolean): UiSelectorBuilder;

        visibleToUser(): UiSelectorBuilder;
        visibleToUser(value: boolean): UiSelectorBuilder;

        accessibilityFocused(): UiSelectorBuilder;
        accessibilityFocused(value: boolean): UiSelectorBuilder;

        selected(): UiSelectorBuilder;
        selected(value: boolean): UiSelectorBuilder;

        clickable(): UiSelectorBuilder;
        clickable(value: boolean): UiSelectorBuilder;

        longClickable(): UiSelectorBuilder;
        longClickable(value: boolean): UiSelectorBuilder;

        enabled(): UiSelectorBuilder;
        enabled(value: boolean): UiSelectorBuilder;

        password(): UiSelectorBuilder;
        password(value: boolean): UiSelectorBuilder;

        scrollable(): UiSelectorBuilder;
        scrollable(value: boolean): UiSelectorBuilder;

        editable(): UiSelectorBuilder;
        editable(value: boolean): UiSelectorBuilder;

        contentInvalid(): UiSelectorBuilder;
        contentInvalid(value: boolean): UiSelectorBuilder;

        contextClickable(): UiSelectorBuilder;
        contextClickable(value: boolean): UiSelectorBuilder;

        multiLine(): UiSelectorBuilder;
        multiLine(value: boolean): UiSelectorBuilder;

        dismissable(): UiSelectorBuilder;
        dismissable(value: boolean): UiSelectorBuilder;

        depth(value: number): UiSelectorBuilder;

        row(value: number): UiSelectorBuilder;

        rowCount(value: number): UiSelectorBuilder;

        rowSpan(value: number): UiSelectorBuilder;

        column(value: number): UiSelectorBuilder;

        columnCount(value: number): UiSelectorBuilder;

        columnSpan(value: number): UiSelectorBuilder;

        indexInParent(value: number): UiSelectorBuilder;

        drawingOrder(value: number): UiSelectorBuilder;

        bfs(): UiSelectorBuilder;

        dfs(): UiSelectorBuilder;

        build(): UiSelector;
    }

    class Image {
        private constructor();

        recycle(): void;

        getWidth(): number;

        getHeight(): number;

        getColor(x: number, y: number): number;

        save(): Promise<void>;

        saveAs(filename: string): Promise<void>;
    }

    interface CompareColorOptionsConstructorOptions {
        readonly threshold?: number;
    }

    class CompareColorOptions {
        static readonly defaultOptions: {
            readonly threshold: number;
        };

        readonly threshold: number;

        constructor();
        constructor(options: CompareColorOptionsConstructorOptions);
    }

    interface FindColorOptionsConstructorOptions {
        readonly threshold?: number;

        readonly region?: Rect | RectData;
    }

    class FindColorOptions {
        static readonly defaultOptions: {
            readonly threshold: number;

            readonly region: Rect;
        };

        readonly threshold: number;

        readonly region: Rect;

        constructor();
        constructor(options: FindColorOptionsConstructorOptions);
    }

    interface SaveImageOptionsConstructorOptions {
        readonly filename?: string;

        readonly path?: string;

        readonly region?: Rect | RectData;
    }

    class SaveImageOptions {
        static readonly defaultOptions: {
            readonly filename: string;

            readonly path: string;

            readonly region: Rect;
        };

        readonly filename: string;

        readonly path: string;

        readonly region: Rect;

        constructor();
        constructor(options: SaveImageOptionsConstructorOptions);
    }

    type ProjectCategory = 'Normal' | 'ConfigFile' | 'Others';

    interface ProjectInfo {
        readonly name: string;
        readonly path: string;
        readonly category: ProjectCategory;
        readonly entryPoint: string;
        readonly workingDir: string;
        readonly configFilePath: string;
        readonly shortcut: boolean;
        readonly permissions: string[];
        readonly args: string[];
        readonly repository: string;
        readonly updatedAt: number;
        readonly cachedAt: number;
        readonly tasks: string[];
        readonly running: boolean;
        readonly id: number;
        readonly planAt: number;
    }
}
