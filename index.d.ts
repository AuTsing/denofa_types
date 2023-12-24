// deno-lint-ignore-file no-explicit-any

declare namespace Android {
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

        function getDenortVersion(): string;

        function getDenortCoreVersion(): string;
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

        function acquireScreenBright(maybeTimeout?: number): void;

        function acquireScreenDim(maybeTimeout?: number): void;

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
    }

    namespace finger {
        namespace accessibility {
            function home(): void;

            function back(): void;

            function recents(): void;

            function notifications(): void;

            function lockScreen(): void;

            function powerDialog(): void;

            function quickSettings(): void;

            function takeScreenshot(): void;

            function toggleSplitScreen(): void;

            function tap(point: Point): Promise<void>;

            function tap(point: PointConstructorOptions): Promise<void>;

            function tap(x: number, y: number): Promise<void>;

            function swipe(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function swipe(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions, duration?: number): Promise<void>;

            function swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions, duration?: number): Promise<void>;

            function dragAndDrop(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;
        }

        namespace root {
            function tap(point: Point): Promise<void>;

            function tap(point: PointConstructorOptions): Promise<void>;

            function tap(x: number, y: number): Promise<void>;

            function swipe(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function swipe(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions, duration?: number): Promise<void>;

            function swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: PointConstructorOptions, pointTo: PointConstructorOptions, duration?: number): Promise<void>;

            function dragAndDrop(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function down(point: Point): Promise<void>;

            function down(point: PointConstructorOptions): Promise<void>;

            function down(x: number, y: number): Promise<void>;

            function move(point: Point): Promise<void>;

            function move(point: PointConstructorOptions): Promise<void>;

            function move(x: number, y: number): Promise<void>;

            function up(point: Point): Promise<void>;

            function up(point: PointConstructorOptions): Promise<void>;

            function up(x: number, y: number): Promise<void>;

            function multiDown(point: Point, id?: number): Promise<void>;

            function multiDown(point: PointConstructorOptions, id?: number): Promise<void>;

            function multiDown(x: number, y: number, id?: number): Promise<void>;

            function multiMove(point: Point, id?: number): Promise<void>;

            function multiMove(point: PointConstructorOptions, id?: number): Promise<void>;

            function multiMove(x: number, y: number, id?: number): Promise<void>;

            function multiUp(id?: number): Promise<void>;
        }
    }

    namespace img {
        class Image {
            private constructor();

            recycle(): void;

            getWidth(): Promise<number>;

            getHeight(): Promise<number>;

            getColor(x: number, y: number): Promise<number>;
        }

        interface CompareColorOptionsConstructorOptions {
            readonly threshold?: number;
        }

        class CompareColorOptions {
            static readonly defaultOptions: {
                readonly threshold: number;
            };

            readonly threshold: number;

            constructor(options?: CompareColorOptionsConstructorOptions);
        }

        interface FindColorOptionsConstructorOptions {
            readonly threshold?: number;

            readonly rect?: Rect;
        }

        class FindColorOptions {
            static readonly defaultOptions: {
                readonly threshold: number;

                readonly rect: Rect;
            };

            readonly threshold: number;

            readonly rect: Rect;

            constructor(options?: FindColorOptionsConstructorOptions);
        }

        function refresh(): Promise<void>;

        function getImage(): Image;

        function lock(): void;

        function unlock(): void;

        function compareColor(point: Point, options?: CompareColorOptions): Promise<boolean>;

        function compareColor(point: Point, options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function compareColor(point: PointConstructorOptions, options?: CompareColorOptions): Promise<boolean>;

        function compareColor(point: PointConstructorOptions, options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function compareColor(x: number, y: number, c: number, options?: CompareColorOptions): Promise<boolean>;

        function compareColor(x: number, y: number, c: number, options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function compareColors(points: Point[], options?: CompareColorOptions): Promise<boolean>;

        function compareColors(points: Point[], options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function compareColors(points: PointConstructorOptions[], options?: CompareColorOptions): Promise<boolean>;

        function compareColors(points: PointConstructorOptions[], options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function compareColors(xycs: [number, number, number][], options?: CompareColorOptions): Promise<boolean>;

        function compareColors(xycs: [number, number, number][], options?: CompareColorOptionsConstructorOptions): Promise<boolean>;

        function findColor(color: number, options?: FindColorOptions): Promise<Point>;

        function findColor(color: number, options?: FindColorOptionsConstructorOptions): Promise<Point>;

        function findColors(color: number, options?: FindColorOptions): Promise<Point[]>;

        function findColors(color: number, options?: FindColorOptionsConstructorOptions): Promise<Point[]>;

        function findMultiColor(color: number, points: Point[], options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, points: Point[], options?: FindColorOptionsConstructorOptions): Promise<Point>;

        function findMultiColor(color: number, points: PointConstructorOptions[], options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, points: PointConstructorOptions[], options?: FindColorOptionsConstructorOptions): Promise<Point>;

        function findMultiColor(color: number, xycs: [number, number, number][], options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, xycs: [number, number, number][], options?: FindColorOptionsConstructorOptions): Promise<Point>;

        function findMultiColor(color: number, pointsInfo: string, options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, pointsInfo: string, options?: FindColorOptionsConstructorOptions): Promise<Point>;

        function findMultiColors(color: number, points: Point[], options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, points: Point[], options?: FindColorOptionsConstructorOptions): Promise<Point[]>;

        function findMultiColors(color: number, points: PointConstructorOptions[], options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, points: PointConstructorOptions[], options?: FindColorOptionsConstructorOptions): Promise<Point[]>;

        function findMultiColors(color: number, xycs: [number, number, number][], options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, xycs: [number, number, number][], options?: FindColorOptionsConstructorOptions): Promise<Point[]>;

        function findMultiColors(color: number, pointsInfo: string, options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, pointsInfo: string, options?: FindColorOptionsConstructorOptions): Promise<Point[]>;
    }

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

        namespace root {
            function inputText(text: string): Promise<void>;

            function inputKeyEvent(key: string): Promise<void>;
        }

        /** 在屏幕输出 Toast 信息。 */
        function toast(...args: any[]): void;

        interface NotificationConstructorOptions {
            readonly message?: string;

            readonly title?: string | null;

            readonly smallIcon?: string | null;

            readonly largeIcon?: string | null;
        }

        class Notification {
            readonly message: string;

            readonly title: string | null;

            readonly smallIcon: string | null;

            readonly largeIcon: string | null;

            constructor(options?: NotificationConstructorOptions);

            constructor(message: string | null, title: string | null, smallIcon: string | null, largeIcon: string | null);
        }

        function notification(notification: Notification): void;

        function notification(message: string): void;

        function notification(options: NotificationConstructorOptions): void;

        function notification(message: string | null, title: string | null, smallIcon: string | null, largeIcon: string | null): void;
    }

    namespace project {
        function run(projectName: string): void;

        function stop(maybeProjectName?: string): void;
    }

    namespace shell {
        interface ShellerResult {
            readonly code: number;
            readonly out: string[];
            readonly err: string[];
            readonly isSuccess: boolean;
        }

        enum ShellerCategory {
            Sh = 0,
            Su = 1,
            LibSu = 2,
        }

        class Sheller {
            static readonly defaultOptions: {
                readonly category: ShellerCategory;
            };

            readonly category: ShellerCategory;

            constructor(category?: ShellerCategory);

            exec(cmd: string): Promise<ShellerResult>;
        }
    }

    namespace sys {
        function delay(duration: number): Promise<void>;

        function sleep(duration: number): void;
    }

    interface PointConstructorOptions {
        x?: number;

        y?: number;

        c?: number;
    }

    /** 点类 */
    class Point {
        static readonly defaultOptions: {
            readonly x: number;

            readonly y: number;

            readonly c: number;
        };

        readonly x: number;

        readonly y: number;

        readonly c: number;

        constructor(options?: PointConstructorOptions);

        constructor(x: number | null, y: number | null, c: number | null);
    }

    interface RectConstructorOptions {
        readonly left?: number;

        readonly top?: number;

        readonly right?: number;

        readonly bottom?: number;
    }

    /** 矩形类 */
    class Rect {
        static readonly defaultOptions: {
            readonly left: number;

            readonly top: number;

            readonly right: number;

            readonly bottom: number;
        };

        readonly left: number;

        readonly top: number;

        readonly right: number;

        readonly bottom: number;

        constructor(options?: RectConstructorOptions);

        constructor(left: number | null, top: number | null, right: number | null, bottom: number | null);
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

        checkable(value?: boolean): UiSelectorBuilder;

        checked(value?: boolean): UiSelectorBuilder;

        focusable(value?: boolean): UiSelectorBuilder;

        focused(value?: boolean): UiSelectorBuilder;

        visibleToUser(value?: boolean): UiSelectorBuilder;

        accessibilityFocused(value?: boolean): UiSelectorBuilder;

        selected(value?: boolean): UiSelectorBuilder;

        clickable(value?: boolean): UiSelectorBuilder;

        longClickable(value?: boolean): UiSelectorBuilder;

        enabled(value?: boolean): UiSelectorBuilder;

        password(value?: boolean): UiSelectorBuilder;

        scrollable(value?: boolean): UiSelectorBuilder;

        editable(value?: boolean): UiSelectorBuilder;

        contentInvalid(value?: boolean): UiSelectorBuilder;

        contextClickable(value?: boolean): UiSelectorBuilder;

        multiLine(value?: boolean): UiSelectorBuilder;

        dismissable(value?: boolean): UiSelectorBuilder;

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

    /** Ui 选择器类 */
    class UiSelector {
        static builder(): UiSelectorBuilder;

        private constructor();

        find(): UiObject[];

        findOne(): UiObject | null;

        untilFind(timeout?: number): Promise<UiObject[]>;

        untilFindOne(timeout?: number): Promise<UiObject>;

        exists(): boolean;

        wait(timeout?: number): Promise<void>;
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

    class Floater {
        static builder(): FloaterBuilder;

        static builder(id: string): FloaterBuilder;

        id: string;

        private constructor();

        show(): Promise<Floater>;

        updatePosition(x: number, y: number): Floater;

        updateSize(width: number, heigth: number): Floater;

        updateBackgroundColor(color: number): Floater;

        updateText(text: string): Floater;

        updateTextColor(color: number): Floater;

        close(): Promise<Floater>;
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

        constructor(options?: QuickUiSelectOptionsConstructorOptions);

        constructor(label: string | null, options: string[] | null, displayOptions: string[] | null, defaultValue: string | null);
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

        constructor(options?: QuickUiSwitchOptionsConstructorOptions);

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

        constructor(options?: QuickUiCheckboxOptionsConstructorOptions);

        constructor(label: string | null, options: string[] | null, displayOptions: string[] | null, defaultValue: string[] | null);
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

        constructor(options?: QuickUiInputOptionsConstructorOptions);

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

        constructor(options?: QuickUiTextOptionsConstructorOptions);

        constructor(value: string | null, fontSize: number | null, color: number | null);
    }

    class QuickUiBuilder {
        private constructor();

        setTitle(content: string): QuickUiBuilder;

        setOkText(content: string): QuickUiBuilder;

        setCancelText(content: string): QuickUiBuilder;

        setCountDownTime(s: number): QuickUiBuilder;

        addSelect(id: string): QuickUiBuilder;

        addSelect(id: string, options?: QuickUiSelectOptions): QuickUiBuilder;

        addSelect(id: string, options?: QuickUiSelectOptionsConstructorOptions): QuickUiBuilder;

        addSelect(id: string, label: string | null, options: string[] | null, displayOptions: string[] | null, defaultValue: string | null): QuickUiBuilder;

        addSwitch(id: string): QuickUiBuilder;

        addSwitch(id: string, options?: QuickUiSwitchOptions): QuickUiBuilder;

        addSwitch(id: string, options?: QuickUiSwitchOptionsConstructorOptions): QuickUiBuilder;

        addSwitch(id: string, label: string | null, defaultValue: string | null): QuickUiBuilder;

        addCheckbox(id: string): QuickUiBuilder;

        addCheckbox(id: string, options?: QuickUiCheckboxOptions): QuickUiBuilder;

        addCheckbox(id: string, options?: QuickUiCheckboxOptionsConstructorOptions): QuickUiBuilder;

        addCheckbox(id: string, label: string | null, options: string[] | null, displayOptions: string[] | null, defaultValue: string[] | null): QuickUiBuilder;

        addInput(id: string): QuickUiBuilder;

        addInput(id: string, options?: QuickUiInputOptions): QuickUiBuilder;

        addInput(id: string, options?: QuickUiInputOptionsConstructorOptions): QuickUiBuilder;

        addInput(id: string, label: string | null, defaultValue: string | null): QuickUiBuilder;

        addText(id: string): QuickUiBuilder;

        addText(id: string, options?: QuickUiTextOptions): QuickUiBuilder;

        addText(id: string, options?: QuickUiTextOptionsConstructorOptions): QuickUiBuilder;

        addText(id: string, value: string | null, fontSize: number | null, color: number | null): QuickUiBuilder;

        build(): QuickUi;
    }

    class QuickUi {
        static builder(): QuickUiBuilder;

        static builder(id: string): QuickUiBuilder;

        id: string;

        private constructor();

        show(): Promise<QuickUi>;

        getResult(): QuickUiResult;

        waitForResult(): Promise<QuickUiResult>;
    }
}
