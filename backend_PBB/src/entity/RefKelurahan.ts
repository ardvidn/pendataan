import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DatPetaBlok } from "./DatPetaBlok";
import { DatZnt } from "./DatZnt";
import { PenghapusanOpSe14 } from "./PenghapusanOpSe14";
import { RefKecamatan } from "./RefKecamatan";

@Index("a4_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nmKelurahan"], { unique: true })
@Index("a4_2_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdSektor"], { unique: true })
@Index("ref_kelurahan_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Entity("ref_kelurahan", { schema: "public" })
export class RefKelurahan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_sektor", length: 2, default: () => "'10'" })
  kdSektor!: string;

  @Column("character varying", { name: "nm_kelurahan", length: 30 })
  nmKelurahan!: string;

  @Column("smallint", { name: "no_kelurahan", nullable: true })
  noKelurahan!: number | null;

  @Column("character varying", {
    name: "kd_pos_kelurahan",
    nullable: true,
    length: 5,
  })
  kdPosKelurahan!: string | null;

  @OneToMany(() => DatPetaBlok, (datPetaBlok) => datPetaBlok.refKelurahan)
  datPetaBloks!: DatPetaBlok[];

  @OneToMany(() => DatZnt, (datZnt) => datZnt.refKelurahan)
  datZnts!: DatZnt[];

  @OneToMany(() => PenghapusanOpSe14, (penghapusanOpSe14) => penghapusanOpSe14.refKelurahan)
  penghapusanOpSes!: PenghapusanOpSe14[];

  @ManyToOne(() => RefKecamatan, (refKecamatan) => refKecamatan.refKelurahans)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
  ])
  refKecamatan!: RefKecamatan;
}
