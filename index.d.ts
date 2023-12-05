// deno-lint-ignore-file no-explicit-any

declare namespace Android {
    namespace app {
        function toPackageName(appName: string): string;

        function toAppName(packageName: string): string;

        function launchPackage(packageName: string): void;

        function launchApp(appName: string): void;

        function getCurrentPackage(): string;

        function getCurrentApp(): string;

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

            function tap(x: number, y: number): Promise<void>;

            function swipe(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function dragAndDrop(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;
        }

        namespace root {
            function tap(point: Point): Promise<void>;

            function tap(x: number, y: number): Promise<void>;

            function swipe(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function swipe(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function dragAndDrop(pointFrom: Point, pointTo: Point, duration?: number): Promise<void>;

            function dragAndDrop(xFrom: number, yFrom: number, xTo: number, yTo: number, duration?: number): Promise<void>;

            function down(point: Point): Promise<void>;

            function down(x: number, y: number): Promise<void>;

            function move(point: Point): Promise<void>;

            function move(x: number, y: number): Promise<void>;

            function up(point: Point): Promise<void>;

            function up(x: number, y: number): Promise<void>;

            function multiDown(point: Point, id?: number): Promise<void>;

            function multiDown(x: number, y: number, id?: number): Promise<void>;

            function multiMove(point: Point, id?: number): Promise<void>;

            function multiMove(x: number, y: number, id?: number): Promise<void>;

            function multiUp(id?: number): Promise<void>;
        }
    }

    namespace img {
        class Image {
            recycle(): void;

            getWidth(): Promise<number>;

            getHeight(): Promise<number>;

            getColor(x: number, y: number): Promise<number>;
        }

        class CompareColorOptions {
            constructor(threshold?: number);

            threshold: number;
        }

        class FindColorOptions {
            constructor(threshold?: number, rect?: Rect);

            threshold: number;

            rect: Rect;
        }

        function refresh(): Promise<void>;

        function getImage(): Image;

        function lock(): void;

        function unlock(): void;

        function compareColor(point: Point, options?: CompareColorOptions): Promise<boolean>;

        function compareColor(x: number, y: number, c: number, options?: CompareColorOptions): Promise<boolean>;

        function compareColors(point: Point[], options?: CompareColorOptions): Promise<boolean>;

        function compareColors(xycs: number[][], options?: CompareColorOptions): Promise<boolean>;

        function findColor(color: number, options?: FindColorOptions): Promise<Point>;

        function findColors(color: number, options?: FindColorOptions): Promise<Point[]>;

        function findMultiColor(color: number, points: Point[], options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, points: number[][], options?: FindColorOptions): Promise<Point>;

        function findMultiColor(color: number, points: string, options?: FindColorOptions): Promise<Point>;

        function findMultiColors(color: number, points: Point[], options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, points: number[][], options?: FindColorOptions): Promise<Point[]>;

        function findMultiColors(color: number, points: string, options?: FindColorOptions): Promise<Point[]>;
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

        /** 在屏幕输出 Toast 信息。 */
        function toast(...args: any[]): void;

        class Notification {
            constructor(message: string, title?: string, smallIcon?: string, largeIcon?: string);

            message: string;

            title?: string;

            smallIcon?: string;

            largeIcon?: string;
        }

        function notification(message: string): void;

        function notification(notification: Notification): void;

        namespace root {
            function inputText(text: string): Promise<void>;

            function inputKeyEvent(key: string): Promise<void>;
        }
    }

    namespace project {
        function run(projectName: string): void;

        function stop(maybeProjectName?: string): void;
    }

    namespace sys {
        function delay(duration: number): Promise<void>;

        function sleep(duration: number): void;
    }

    /** 点类 */
    class Point {
        static from(point: Point): Point;

        constructor(x?: number, y?: number, c?: number);

        x: number;

        y: number;

        c: number;
    }

    /** 矩形类 */
    class Rect {
        static from(rect: Rect): Rect;

        constructor(left?: number, top?: number, right?: number, bottom?: number);

        left: number;

        top: number;

        right: number;

        bottom: number;
    }

    /** Ui 对象类 */
    class UiObject {
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

        find(): UiObject[];

        findOne(): UiObject | null;

        untilFind(timeout?: number): Promise<UiObject[]>;

        untilFindOne(timeout?: number): Promise<UiObject>;

        exists(): boolean;

        wait(timeout?: number): Promise<void>;
    }

    class FloaterBuilder {
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

        constructor(label?: string, options?: string[], displayOptions?: string[], defaultValue?: string);
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

        constructor(label?: string, defaultValue?: string);
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

        constructor(label?: string, options?: string[], displayOptions?: string[], defaultValue?: string[]);
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

        constructor(label?: string, defaultValue?: string);
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

        constructor(value?: string, fontSize?: number, color?: number);
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

        addSelect(id: string, label?: string, options?: string[], displayOptions?: string[], defaultValue?: string): QuickUiBuilder;

        addSwitch(id: string): QuickUiBuilder;

        addSwitch(id: string, options?: QuickUiSwitchOptions): QuickUiBuilder;

        addSwitch(id: string, options?: QuickUiSwitchOptionsConstructorOptions): QuickUiBuilder;

        addSwitch(id: string, label?: string, defaultValue?: string): QuickUiBuilder;

        addCheckbox(id: string): QuickUiBuilder;

        addCheckbox(id: string, options?: QuickUiCheckboxOptions): QuickUiBuilder;

        addCheckbox(id: string, options?: QuickUiCheckboxOptionsConstructorOptions): QuickUiBuilder;

        addCheckbox(id: string, label?: string, options?: string[], displayOptions?: string[], defaultValue?: string[]): QuickUiBuilder;

        addInput(id: string): QuickUiBuilder;

        addInput(id: string, options?: QuickUiInputOptions): QuickUiBuilder;

        addInput(id: string, options?: QuickUiInputOptionsConstructorOptions): QuickUiBuilder;

        addInput(id: string, label?: string, defaultValue?: string): QuickUiBuilder;

        addText(id: string): QuickUiBuilder;

        addText(id: string, options?: QuickUiTextOptions): QuickUiBuilder;

        addText(id: string, options?: QuickUiTextOptionsConstructorOptions): QuickUiBuilder;

        addText(id: string, value?: string, fontSize?: number, color?: number): QuickUiBuilder;

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
