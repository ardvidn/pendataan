import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DbkbDayaDukung } from "./DbkbDayaDukung";
import { DbkbJpb12 } from "./DbkbJpb12";
import { DbkbJpb13 } from "./DbkbJpb13";
import { DbkbJpb14 } from "./DbkbJpb14";
import { DbkbJpb15 } from "./DbkbJpb15";
import { DbkbJpb16 } from "./DbkbJpb16";
import { DbkbJpb2 } from "./DbkbJpb2";
import { DbkbJpb3 } from "./DbkbJpb3";
import { DbkbJpb4 } from "./DbkbJpb4";
import { DbkbJpb5 } from "./DbkbJpb5";
import { DbkbJpb6 } from "./DbkbJpb6";
import { DbkbJpb7 } from "./DbkbJpb7";
import { DbkbJpb8 } from "./DbkbJpb8";
import { DbkbJpb9 } from "./DbkbJpb9";
import { DbkbMaterial } from "./DbkbMaterial";
import { DbkbMezanin } from "./DbkbMezanin";
import { DbkbStandard } from "./DbkbStandard";
import { FasDepJpbKlsBintang } from "./FasDepJpbKlsBintang";
import { FasDepMinMax } from "./FasDepMinMax";
import { FasNonDep } from "./FasNonDep";
import { RefPropinsi } from "./RefPropinsi";
import { RefKecamatan } from "./RefKecamatan";

@Index("ref_dati2_pkey", ["kdDati2", "kdPropinsi"], { unique: true })
@Index("a2_1_ak", ["kdDati2", "kdPropinsi", "nmDati2"], { unique: true })
@Entity("ref_dati2", { schema: "public" })
export class RefDati2 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character varying", { name: "nm_dati2", length: 30 })
  nmDati2!: string;

  @OneToMany(() => DbkbDayaDukung, (dbkbDayaDukung) => dbkbDayaDukung.refDati)
  dbkbDayaDukungs!: DbkbDayaDukung[];

  @OneToMany(() => DbkbJpb12, (dbkbJpb12) => dbkbJpb12.refDati)
  dbkbJpbs!: DbkbJpb12[];

  @OneToMany(() => DbkbJpb13, (dbkbJpb13) => dbkbJpb13.refDati)
  dbkbJpbs2!: DbkbJpb13[];

  @OneToMany(() => DbkbJpb14, (dbkbJpb14) => dbkbJpb14.refDati)
  dbkbJpbs3!: DbkbJpb14[];

  @OneToMany(() => DbkbJpb15, (dbkbJpb15) => dbkbJpb15.refDati)
  dbkbJpbs4!: DbkbJpb15[];

  @OneToMany(() => DbkbJpb16, (dbkbJpb16) => dbkbJpb16.refDati)
  dbkbJpbs5!: DbkbJpb16[];

  @OneToMany(() => DbkbJpb2, (dbkbJpb2) => dbkbJpb2.refDati)
  dbkbJpbs6!: DbkbJpb2[];

  @OneToMany(() => DbkbJpb3, (dbkbJpb3) => dbkbJpb3.refDati)
  dbkbJpbs7!: DbkbJpb3[];

  @OneToMany(() => DbkbJpb4, (dbkbJpb4) => dbkbJpb4.refDati)
  dbkbJpbs8!: DbkbJpb4[];

  @OneToMany(() => DbkbJpb5, (dbkbJpb5) => dbkbJpb5.refDati)
  dbkbJpbs9!: DbkbJpb5[];

  @OneToMany(() => DbkbJpb6, (dbkbJpb6) => dbkbJpb6.refDati)
  dbkbJpb10!: DbkbJpb6[];

  @OneToMany(() => DbkbJpb7, (dbkbJpb7) => dbkbJpb7.refDati)
  dbkbJpb11!: DbkbJpb7[];

  @OneToMany(() => DbkbJpb8, (dbkbJpb8) => dbkbJpb8.refDati)
  dbkbJpb12!: DbkbJpb8[];

  @OneToMany(() => DbkbJpb9, (dbkbJpb9) => dbkbJpb9.refDati)
  dbkbJpb13!: DbkbJpb9[];

  @OneToMany(() => DbkbMaterial, (dbkbMaterial) => dbkbMaterial.refDati)
  dbkbMaterials!: DbkbMaterial[];

  @OneToMany(() => DbkbMezanin, (dbkbMezanin) => dbkbMezanin.refDati)
  dbkbMezanins!: DbkbMezanin[];

  @OneToMany(() => DbkbStandard, (dbkbStandard) => dbkbStandard.refDati)
  dbkbStandards!: DbkbStandard[];

  @OneToMany(() => FasDepJpbKlsBintang, (fasDepJpbKlsBintang) => fasDepJpbKlsBintang.refDati)
  fasDepJpbKlsBintangs!: FasDepJpbKlsBintang[];

  @OneToMany(() => FasDepMinMax, (fasDepMinMax) => fasDepMinMax.refDati)
  fasDepMinMaxes!: FasDepMinMax[];

  @OneToMany(() => FasNonDep, (fasNonDep) => fasNonDep.refDati)
  fasNonDeps!: FasNonDep[];

  @ManyToOne(() => RefPropinsi, (refPropinsi) => refPropinsi.refDatis)
  @JoinColumn([{ name: "kd_propinsi", referencedColumnName: "kdPropinsi" }])
  kdPropinsi2!: RefPropinsi;

  @OneToMany(() => RefKecamatan, (refKecamatan) => refKecamatan.refDati)
  refKecamatans!: RefKecamatan[];
}
