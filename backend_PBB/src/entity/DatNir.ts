import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { DatZnt } from "./DatZnt";

@Index("d2_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "thnNirZnt"], { unique: true })
@Index("dat_nir_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "thnNirZnt"], { unique: true })
@Index("d2_3_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "thnNirZnt"], { unique: true })
@Index("d2_2_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "thnNirZnt"], { unique: true })
@Entity("dat_nir", { schema: "public" })
export class DatNir {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_znt", length: 2 })
  kdZnt!: string;

  @Column("character", { primary: true, name: "thn_nir_znt", length: 4 })
  thnNirZnt!: string;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "jns_dokumen", length: 1 })
  jnsDokumen!: string;

  @Column("character", { name: "no_dokumen", length: 11 })
  noDokumen!: string;

  @Column("numeric", { name: "nir", precision: 12, scale: 2 })
  nir!: string;

  @ManyToOne(() => DatZnt, (datZnt) => datZnt.datNirs)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_znt", referencedColumnName: "kdZnt" },
  ])
  datZnt!: DatZnt;
}
