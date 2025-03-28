import { Column, Entity, Index } from "typeorm";

@Index("penduduk_bng_sin_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], {})
@Index("penduduk_bng_sin_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noPenduduk", "noUrut"], { unique: true })
@Index("penduduk_bng_sin_fk2", ["noPenduduk"], {})
@Entity("penduduk_bng_sin", { schema: "public" })
export class PendudukBngSin {
  @Column("character", { primary: true, name: "no_penduduk", length: 30 })
  noPenduduk!: string;

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

  @Column("smallint", { primary: true, name: "no_bng" })
  noBng!: number;
}
