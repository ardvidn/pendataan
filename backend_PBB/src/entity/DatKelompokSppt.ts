import { Column, Entity, Index } from "typeorm";

@Index("dat_kelompok_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelompokSppt", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("f10_d7_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], {})
@Index("f10_f11_fk", ["kdKelompokSppt"], {})
@Entity("dat_kelompok_sppt", { schema: "public" })
export class DatKelompokSppt {
  @Column("character", { primary: true, name: "kd_kelompok_sppt", length: 4 })
  kdKelompokSppt!: string;

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

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;
}
