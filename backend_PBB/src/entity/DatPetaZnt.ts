import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DatOpBumi } from "./DatOpBumi";
import { DatPetaBlok } from "./DatPetaBlok";
import { DatZnt } from "./DatZnt";

@Index("dat_peta_znt_pkey", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt"], { unique: true })
@Index("d5_pk3", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt"], { unique: true })
@Index("d5_d1_fk", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt"], {})
@Entity("dat_peta_znt", { schema: "public" })
export class DatPetaZnt {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "kd_znt", length: 2 })
  kdZnt!: string;

  @OneToMany(() => DatOpBumi, (datOpBumi) => datOpBumi.datPetaZnt)
  datOpBumis!: DatOpBumi[];

  @ManyToOne(() => DatPetaBlok, (datPetaBlok) => datPetaBlok.datPetaZnts)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
  ])
  datPetaBlok!: DatPetaBlok;

  @ManyToOne(() => DatZnt, (datZnt) => datZnt.datPetaZnts)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_znt", referencedColumnName: "kdZnt" },
  ])
  datZnt!: DatZnt;
}
